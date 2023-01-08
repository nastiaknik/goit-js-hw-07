import { galleryItems } from "./gallery-items.js";

//  1) Ств і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елем
// галереї. Викор готовий код з 1ого завдання.
// 2) Підкл скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple - lightbox.min.js і
// simple - lightbox.min.css.
// 3) Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox - секції «Usage» і «Markup».
// 4) Подивися в документації секцію «Options» і додай відображення підписів до зображень
// з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після
// відкриття зобр

// <a class="gallery__item" href="large-image.jpg">
//  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      (image) => `<a class="gallery__item" href="${image.original}"><img 
      class="gallery__image" src="${image.preview}" alt="${image.description}" /></a>`
    )
    .join("");
}

const simpleLightboxOptions = {
  captionsData: "alt",
  captionDelay: 250,
};

let gallerySet = new SimpleLightbox(
  ".gallery .gallery__item",
  simpleLightboxOptions
);

console.log(galleryItems);

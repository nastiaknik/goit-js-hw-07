import { galleryItems } from "./gallery-items.js";

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного
// зобр у модальному вікні.

// 1) Ств і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елем галереї
// 2) Реалізація делегування на div.gallery і отримання url великого зображення.
// 3) Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Викор
// CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4) Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
// 5) Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// 6) Викор готову розмітку модального вікна із зобр з прикладів бібліотеки basicLightbox.

// <div class="gallery">
//  <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//   <img
//    class="gallery__image"
//    src="small-image.jpg"
//    data-source="large-image.jpg"
//    alt="Image description"/></a>
//  </div></div>

const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);
galleryBox.addEventListener("click", onGalleryImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      (image) => `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}" 
      alt="${image.description}"
    />
  </a>
</div>
`
    )
    .join("");
}

function onGalleryImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImage = event.target.dataset.source;

  const options = {
    onShow: () => {
      window.addEventListener("keydown", onKeyEscPress);
    },
    onClose: () => {
      window.removeEventListener("keydown", onKeyEscPress);
    },
  };

  const instance = basicLightbox.create(
    // екземпляр
    `<img src="${originalImage}"/>`,
    options
  );

  instance.show();

  function onKeyEscPress(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}

console.log(galleryItems);

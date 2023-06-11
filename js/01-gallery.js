import { galleryItems } from "./gallery-items.js";

const ulItemGalery = document.querySelector(".gallery");

function galleryCreate() {
  const galleryItem = galleryItems
    .map(
      ({ preview, description, original }) =>
        ` <li class = "gallery__item">
  <a class="gallery__link" href="${original}">
      <img class = "gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}">
</a></li>`
    )
    .join("");

  ulItemGalery.insertAdjacentHTML("beforeend", galleryItem);

  const ul = document.querySelector(".gallery");
  ul.addEventListener("click", (event) => openModal(event, galleryItems));
}

function openModal(event) {
  event.preventDefault();

  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src ="${imageSrc}" width = "800"  height = "600">`);
  instance.show();

}

galleryCreate();

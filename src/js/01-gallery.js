// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const div = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (img) => `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  )
  .join("");

  div.insertAdjacentHTML("beforeend", images);

  const gallery = new SimpleLightbox(".gallery__item a", {});
console.log(galleryItems);

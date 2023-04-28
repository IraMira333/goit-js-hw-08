import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const containerGalleryImages = document.querySelector(".gallery");
const imagesMarkup = creatFotoCardsMurkup(galleryItems);

containerGalleryImages.insertAdjacentHTML("beforeend", imagesMarkup);

function creatFotoCardsMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
        `;
    })
    .join("");
}
//! Creating a new SimpleLightbox instance and configuring it to use the "alt" attribute for captions
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
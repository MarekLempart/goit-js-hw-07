import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryElements = galleryItems.map((item) => {
  const galleryListItem = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  galleryListItem.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  link.href = item.original;
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  galleryListItem.appendChild(link);
  return galleryListItem;
});

galleryList.append(...galleryElements);

// var images = document.querySelectorAll(".gallery img");
// images.forEach(function (image) {
//   image.addEventListener("click", function (event) {
//     event.preventDefault();
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
//   });
// });

console.log(galleryItems);

// document.addEventListener("DOMContentLoaded", () => {
//   const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
//   });

//   lightbox.on("show.simplelightbox", () => {
//     document.addEventListener("keydown", onEscape);
//   });

//   lightbox.on("close.simplelightbox", () => {
//     document.removeEventListener("keydown", onEscape);
//   });
// });

// function onEscape(event) {
//   if (event.key === "Escape") {
//     const lightbox = SimpleLightbox.getInstance();
//     lightbox.close();
//   }
// }

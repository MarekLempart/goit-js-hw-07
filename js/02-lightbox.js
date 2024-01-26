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

var images = document.querySelectorAll(".gallery img");
images.forEach(function (image) {
  image.addEventListener("click", function (event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox(".gallery a", {
      /* options */
    });
  });
});

// var lightbox = new SimpleLightbox(".gallery a", {});
// galleryList.append(...galleryElements);

console.log(galleryItems);

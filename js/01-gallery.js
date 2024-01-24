import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
// galleryList.addEventListener("clikck", selectImage);

// function selectImage(event) {

//   if (event.target.nodeName === "IMG") {
//     const instance = basicLightbox.create(
//         <img src="${event.target.dataset.source}" alt="${event.target.alt}">
//     );
//     instance.show();
//   }
// });

// console.log(galleryItems);

// import galleryItems from "./gallery-items.js";

// const galleryList = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  listItem.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  link.href = item.original;
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);
  galleryList.appendChild(listItem);
});

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">
    `);

    instance.show();
  }
});

// import { galleryItems } from "./gallery-items.js";
// const gallery = document.querySelector(".gallery");

// document.body.addEventListener("keypress", (e) => {
//   if (e.key === "Escape") basicLightbox.close();
// });

// for (let item of galleryItems) {
//   const galleryItem = document.createElement("div");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = item.original;

//   const galleryImage = document.createElement("img");
//   galleryImage.classList.add("gallery__image");
//   galleryImage.src = item.preview;
//   galleryImage.dataset.source = item.original;
//   galleryImage.alt = item.description;

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);
//   gallery.appendChild(galleryItem);
// }

// gallery.addEventListener("click", (event) => {
//   event.preventDefault();

//   const lightbox = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
//   `);

//   lightbox.show();
// });

// // Change code below this line

// console.log(galleryItems);

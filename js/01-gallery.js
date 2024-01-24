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

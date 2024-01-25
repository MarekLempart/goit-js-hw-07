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

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
    `);
    instance.show();
  }
});

const instance = basicLightbox.create(
  `
    <div class="modal">
        <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
        <input placeholder="Type something">
        <a>Close</a>
    </div>
`,
  {
    onShow: (instance) => {
      instance.element().querySelector("a").onclick = instance.close;
    },
  }
);

function onEscape(event) {
  if (event.code !== "Escape") return;
  instance.close();
}

// document.addEventListener("keydown", (event) => {
//   const instance = basicLightbox.instance();
//   if (event.key === "Escape" && instance.visible()) {
//     instance.close();
//   }
// });

// Change code below this line
console.log(galleryItems);

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// const galleryList = document.querySelector(".gallery");

// galleryItems.forEach((item) => {
//   const galleryListItem = document.createElement("li");
//   const link = document.createElement("a");
//   const image = document.createElement("img");

//   galleryListItem.classList.add("gallery__item");
//   link.classList.add("gallery__link");
//   image.classList.add("gallery__image");

//   link.href = item.original;
//   image.src = item.preview;
//   image.dataset.source = item.original;
//   image.alt = item.description;

//   link.appendChild(image);
//   galleryListItem.appendChild(link);
//   galleryList.appendChild(galleryListItem);
// });

// galleryList.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.nodeName === "IMG") {
//     const instance = basicLightbox.create(`
//       <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
//     `);
//     instance.show();
//   }
// });

// document.addEventListener("keydown", (event) => {
//   const instance = basicLightbox.instance();
//   if (event.key === "Escape" && instance.visible()) {
//     instance.close();
//   }
// });

// // Change code below this line
// console.log(galleryItems);

// import { galleryItems } from "./gallery-items.js";
// const galleryList = document.querySelector(".gallery");

// for (let item of galleryItems) {
//   const galleryListItem = document.createElement("div");
//   const link = document.createElement("a");
//   const image = document.createElement("img");

//   galleryListItem.classList.add("gallery__item");
//   link.classList.add("gallery__link");
//   image.classList.add("gallery__image");

//   link.href = item.original;
//   image.src = item.preview;
//   image.dataset.source = item.original;
//   image.alt = item.description;

//   link.appendChild(image);
//   galleryListItem.appendChild(link);
//   galleryList.appendChild(galleryListItem);
// }

// galleryList.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.nodeName === "IMG") {
//     const instance = basicLightbox.create(`
//       <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
//     `);
//     instance.show();
//   }
// });
// // Change code below this line
// console.log(galleryItems);

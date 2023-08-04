import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery')

function handlerCreateGall (arr) {
    const liEl = arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      width = "250px"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
    
    gallery.insertAdjacentHTML('beforeend', liEl)
};

handlerCreateGall(galleryItems)

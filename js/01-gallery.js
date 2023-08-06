import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(basicLightbox)

const gallery = document.querySelector('.gallery')

function handlerCreateGall (arr) {
   return arr.map(({ preview, original, description }) =>
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
};

gallery.insertAdjacentHTML('beforeend', handlerCreateGall(galleryItems));

gallery.addEventListener('click', hendlerClick);

function hendlerClick(evt) {
  evt.preventDefault();
  
  if (evt.target === evt.currentTarget) {
    return
  }
  const currentItem = evt.target.closest('.gallery__item');
  console.log(currentItem)


  const instance = basicLightbox.create(`
	<div>
  <img src="${galleryItems.original}" alt="${galleryItems.description}">
  </div>
`);

instance.show()
  
}
 
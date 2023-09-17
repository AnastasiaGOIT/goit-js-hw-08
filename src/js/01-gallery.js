import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
2;

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

var lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: '250',
});

console.log(galleryItems);

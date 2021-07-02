import {similarPhotos} from './data.js';
const createPhotoItem = () => {
  const pictureItemElement = document.querySelector('#picture').content;
  const fragment = document.createDocumentFragment();

  similarPhotos.forEach((itemPhoto) => {
    const pictureElement =  pictureItemElement.cloneNode(true);
    pictureElement.querySelector('.picture__likes').textContent = itemPhoto.likes;
    pictureElement.querySelector('.picture__comments').textContent = itemPhoto.comments;
    pictureElement.querySelector('.picture__img').src = itemPhoto.url;
    fragment.appendChild(pictureElement);
  });

  return fragment;

};

export {createPhotoItem};

import {similarPhotos} from './data.js';
const createPhotoItem = () => {
  const pictureListElement = document.querySelector('#picture').content;
  // const pictures = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  similarPhotos.forEach((itemPhoto) => {
    const pictureList = pictureListElement.cloneNode(true);
    pictureList.querySelector('.picture__likes').textContent = itemPhoto.likes;
    pictureList.querySelector('.picture__comments').textContent = itemPhoto.comments;
    pictureList.querySelector('.picture__img').src = itemPhoto.url;
    fragment.appendChild(pictureList);
  });

  return fragment;

};

export {createPhotoItem};

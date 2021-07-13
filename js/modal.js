import {isEscEvent} from './util.js';
import {validHashTag, validComment} from './validation.js';
const loadPhoto = document.querySelector('#upload-file');
const uploadPhotoModal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

loadPhoto.addEventListener('change', () => {
  uploadPhotoModal.classList.remove('hidden');
  body.classList.add('modal-open');

  validHashTag();
  validComment();
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      uploadPhotoModal.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
});

loadPhoto.addEventListener('change', () => {
  uploadPhotoModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

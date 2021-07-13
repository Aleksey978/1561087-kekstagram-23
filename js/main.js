import './util.js';
import './data.js';
import './modal.js';
import {createPhotoItem} from './rendering.js';
const pictures = document.querySelector('.pictures');

const photoItems = createPhotoItem();

pictures.appendChild(photoItems);

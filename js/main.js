import './util.js';
import './data.js';
import {createPhotoItem} from './rendering.js';
const pictures = document.querySelector('.pictures');

const photoItems = createPhotoItem();

pictures.appendChild(photoItems);


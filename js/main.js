import './util.js';
import './data.js';
import './rendering.js';
import {createPhotoItem} from './rendering.js';
const pictures = document.querySelector('.pictures');

const photoItem = createPhotoItem();

pictures.appendChild(photoItem);


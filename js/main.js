const RANDOM_NUMBER = (min, max) => {
  if(min >= 0 && max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'ошибка';
};


const ALLOWED_LENGTH = 140;

const CHECKS_COMMENT_LENGTH = (comment) => {
  if (comment.length <= ALLOWED_LENGTH) {
    return true;
  }
};

CHECKS_COMMENT_LENGTH(50);

const NAMES = [
  'Иван',
  'Алексей',
  'Мария',
  'Александра',
  'Виктор',
  'Юлия',
  'Олег',
  'Илья',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const SIMILAR_PHOTO_COUNT = 25;
const getRandomArrayElement = (elements) => elements[RANDOM_NUMBER(0, elements.length - 1)];

const randomUrl = () => `photos/ ${RANDOM_NUMBER(1, 25)}.jpg`;

const createPhoto = () => ({
  id: RANDOM_NUMBER(1, 25),
  url: randomUrl,
  description: '',
  likes: RANDOM_NUMBER(MIN_LIKES, MAX_LIKES),
  comments: getRandomArrayElement(COMMENTS),
  names: getRandomArrayElement(NAMES),
});

const similarPhotos = new Array(SIMILAR_PHOTO_COUNT).fill(null).map(() => createPhoto());

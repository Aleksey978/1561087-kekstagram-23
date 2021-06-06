const RANDOM_NUMBER = (min, max) => {
  if(min >= 0 && max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'ошибка';
}

RANDOM_NUMBER(1, 10);

const ALLOWED_LENGTH = 140;

const CHECKS_COMMENT_LENGTH = (comment) => {
  if (comment.length <= ALLOWED_LENGTH) {
    return true;
  }
}

CHECKS_COMMENT_LENGTH(50);

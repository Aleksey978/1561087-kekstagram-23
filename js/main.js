let randomNumber = (min, max) => {
  if(min >= 0 && max >= min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'ощибка';
}

randomNumber(1, 10);

let allowedLength = 140;

let checksСommentLength = (comment, allowedLength) => {
  if (comment.length <= allowedLength) {
    return true;
  }
}

checksСommentLength(50);

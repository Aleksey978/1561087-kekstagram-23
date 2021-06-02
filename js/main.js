let randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber(1, 10);

let allowedLength = 140;

let checksСommentLength = (length, allowedLength) => {
  if (length <= allowedLength) {
    return true;
  }
}

checksСommentLength(50);


function validHashTag () {
  const hashTagInput = document.querySelector('.text__hashtags');
  const HASHTAG_REG_EXP = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;
  hashTagInput.addEventListener('input', (evt) => {
    const hashTags = evt.target.value.split(' ').map((hashTag) => hashTag.toLowerCase());
    const validHashtag = HASHTAG_REG_EXP.test(hashTagInput);
    if (!validHashtag) {
      hashTagInput.setCustomValidity('Хэштег не может содержать пробелы и спецсимволы (@, $ и т. п.)');
    }

    for (let i = 0; i < hashTags.length; i++) {
      const hashTag = hashTags[i];
      if (hashTags.indexOf(hashTag, i) > 0) {
        hashTagInput.setCustomValidity('одинаковые хештеги');
      }
    }

    if (hashTags.length > 5) {
      hashTagInput.setCustomValidity('не больше пяти хештегов');
    }
  });
}

function validComment () {
  const commentInput = document.querySelector('.text__description');
  commentInput.addEventListener('input', (evt) => {
    const comment = evt.target.value;
    if (comment.length > 140) {
      commentInput.setCustomValidity('Комментарий не должен содержать больше 140 символов');
    }
  });
}

export {validHashTag, validComment};

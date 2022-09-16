const formValidation = () => {
  if (document.querySelector('#coment-input').value === ' ' || document.querySelector('#comment-text') === ' ') {
    return false;
  }
  return true;
};
export default formValidation;
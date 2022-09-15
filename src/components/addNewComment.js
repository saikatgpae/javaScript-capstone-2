const addNewComment = async (e) => {
  e.preventDefault();
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].style.display = 'block';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.add('meal-popup');
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.width = '50vh';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].style.textAlign = 'center';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[5].style.justifyContent = 'space-evenly';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[7].childNodes[1].style.float = 'none';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[7].style.textAlign = 'center';
};
export default addNewComment;
import formData from './formData.js';
import formValidation from './formValidation.js';

const addNewComment = async (e) => {
  e.preventDefault();
  const itemId = e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1].id.split('-')[1];
  const mealDiv = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('mealdiv');
  commentDiv.innerHTML = `<div class="comment-div"></div>
<div><h3 class="text-center m-3">Add a comment</h3></div>
<form class="comment-box mt-1" onsubmit="return ${formValidation}" method="post">
  <div><input type="text" placeholder="Your name" id="coment-input" required onClick="return document.getElementById('roll-input').value !=''"></div>
  <div><textarea id="comment-text" name="" cols="30" rows="10" placeholder="Your insights" required></textarea></div>
  <div class="comment-button"><button type="submit" id="comment-submit">comment</button></div>
</form>`;
  mealDiv.appendChild(commentDiv);
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1].style.display = 'none';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[11].childNodes[1].style.display = 'none';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].style.display = 'block';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.add('meal-popup');
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.width = '50vh';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].style.textAlign = 'center';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[5].style.justifyContent = 'space-evenly';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[7].childNodes[1].style.float = 'none';
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[7].style.textAlign = 'center';
  document.querySelector('#comment-submit').addEventListener('click', formData);
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lZ1jpmvfp72iObG11Ico/comments?item_id=${itemId}`);
  const json = await response.json();
  document.querySelector('.comment-div').innerHTML = `<h3>Comments(${json.length})</h3>`;
  json.forEach((element) => {
    const commentDetails = document.createElement('div');
    commentDetails.innerHTML = `
    <small>${element.creation_date}</small>
    <small>${element.username}:</small>
    <small>${element.comment}</small>`;
    document.querySelector('.comment-div').appendChild(commentDetails);
  });
};
export default addNewComment;
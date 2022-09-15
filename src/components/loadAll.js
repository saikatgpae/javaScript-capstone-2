import addNewLikes from './addNewLike.js';
import like from '../images/like.png';
import allLikes from './allLikes.js';
import close from '../images/close-logo.png';
import addNewComment from './addNewComment.js';
import closeWindow from './closeWindow.js';

const divMeal = document.getElementById('meal');
const loadAll = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const json = await response.json();
  const allMeals = json.meals;
  const container = document.createElement('div');
  container.className = 'meals';
  allMeals.forEach((element) => {
    const meal = document.createElement('div');
    meal.className = 'p-4 m-4 meal';
    meal.innerHTML = `
<div>
  <div>
  <div class='close'>
    <a><img class="close-image" src="${close}" alt="close image"></a>
  </div>
    <div>
      <img class='mealImage' src="${element.strMealThumb}" alt="meal image">
    </div>
    <div class="mealname mt-4">
      <strong>${element.strMeal}</strong>
      <a href="">
        <img class="like" src="${like}" alt="heart shape image">
      </a>
    </div>
    <div>
      <small class="likes-count"></small>
    </div>
    <div class="mt-4 d-flex comments-button">
      <button class="comments" id="coment-${element.idMeal}">Comments</button>
    </div>
    <div class="mt-2 d-flex reservatio-button">
      <button class="reservation" id="reservation-${element.idMeal}">Reservation</button>
    </div>
  </div>
</div>
    `;
    container.appendChild(meal);
  });
  allLikes();
  document.body.appendChild(container);
  document.querySelectorAll('.like').forEach((item) => {
    item.addEventListener('click', addNewLikes);
  });
  document.querySelectorAll('.comments').forEach((comment) => {
    comment.addEventListener('click', addNewComment);
  });
  document.querySelectorAll('.close-image').forEach((close) => {
    close.addEventListener('click', closeWindow);
  });
  divMeal.appendChild(container);
};
export default loadAll;
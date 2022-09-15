import addNewLikes from './addNewLike.js';
import like from '../images/like.png';
import allLikes from './allLikes.js';

const loadAll = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const json = await response.json();
  const allMeals = json.meals;
  const container = document.createElement('div');
  container.className = 'meals';
  allMeals.forEach((element) => {
    const meal = document.createElement('div');
    meal.className = 'p-4 m-4 meal';
    meal.innerHTML = `<div><img class='mealImage' src="${element.strMealThumb}" alt="meal image"></div>
    <div class="mealname mt-4"><strong>${element.strMeal}</strong><a href=""><img class="like" src="${like}" alt="heart shape image"></a></div>
    <small class="likes-count"></small>
    <div class="mt-4 d-flex comments-button"><button class="comments" id="coment-${element.idMeal}">Comments</button></div>
    <div class="mt-2 d-flex reservatio-button"><button class="reservation" id="reservation-${element.idMeal}">Reservation</button></div>`;
    container.appendChild(meal);
  });
  allLikes();
  document.body.appendChild(container);
  document.querySelectorAll('.like').forEach((item) => {
    item.addEventListener('click', addNewLikes);
  });
};
export default loadAll;

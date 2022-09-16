const mealCount = () => {
  const counts = document.querySelector('.meals').childNodes;
  document.querySelector('#meals-count').innerHTML = `(${counts.length})Meals`;
};

export default mealCount;
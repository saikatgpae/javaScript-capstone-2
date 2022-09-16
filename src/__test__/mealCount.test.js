/**
 * @jest-environment jsdom
 */
import mealsArray from '../__mocks__/mealsArray.js';

const mealCount = () => {
  const counts = document.querySelectorAll('.meal').length;
  return counts;
};

test('Count of total number of meals to be 5', () => {
  document.body.innerHTML = mealsArray;
  const length = mealCount();
  expect(length).toBe(5);
});
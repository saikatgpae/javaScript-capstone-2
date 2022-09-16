/**
 * @jest-environment jsdom
 */
import commentArray from '../__mocks__/commentCountArray.js';

const commentCount = () => {
  const counts = document.querySelectorAll('.comment').length;
  return counts;
};

test('Count of total number of meals to be 9', () => {
  document.body.innerHTML = commentArray;
  const length = commentCount();
  expect(length).toBe(9);
});
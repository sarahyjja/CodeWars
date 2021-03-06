/*

INSTRUCTION

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example:
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/

// SOLUTION

const sortArray = array => {
  const filter = array.filter(odd => odd % 2 != 0);
  const sort = filter.sort((x, y) => x - y);
  const map = array.map(odd => (odd % 2 != 0 ? filter.shift() : odd));
  return map;
};

/*

INSTRUCTION

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)

Good luck!

*/

// SOLUTION

const solve = arr => {
  const findUnique = arr.find(elem => !arr.includes(-elem))
  return findUnique
};

/*

Tests

describe("Basic tests", function(){
Test.assertEquals(solve([1,-1,2,-2,3]),3);
Test.assertEquals(solve([-3,1,2,3,-1,-4,-2]),-4);
Test.assertEquals(solve([1,-1,2,-2,3,3]),3);
Test.assertEquals(solve([-110,110,-38,-38,-62,62,-38,-38,-38]),-38);
Test.assertEquals(solve([ -9,-105,-9,-9,-9,-9,105]),-9);
Test.assertEquals(solve([ -755 ]),-755);
Test.assertEquals(solve([ -304, -304, -304 ]),-304);
Test.assertEquals(solve([ 17 ]),17);
});

*/

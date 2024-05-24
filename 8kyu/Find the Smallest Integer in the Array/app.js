/* 
FIND THE SMALLEST INTEGER IN THE ARRAY

Given an array of integers your solution should find the smallest integer.

Ex:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function findSmallestInt(arr) {
  const min = Math.min(...arr);
  console.log(min)
}

findSmallestInt([11, 24, 33, 41, 5]);
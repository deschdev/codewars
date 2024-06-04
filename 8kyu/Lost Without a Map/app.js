/* 
LOST WITHOUT A MAP
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

function doubleTheNumber(arr) {
  return arr.map(val => val * 2);
}

console.log(doubleTheNumber([1, 2, 3]))
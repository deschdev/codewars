/* 
SORT THE ODD

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Ex:
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

const sortArray = arr => {

  // extracting the odd numbers
  const odds = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);

  // creating an odd index
  let oddIndex = 0;
  // returning a new array that loops through every number in my array. we then check if the individual num is NOT even and if true we will add to the oddIndex else just include the regular num
  return arr.map(num => (num % 2 !== 0 ? odds[oddIndex++] : num))
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);
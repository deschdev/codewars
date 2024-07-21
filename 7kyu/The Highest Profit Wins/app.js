/* 
The HIGHEST PROFIT WINS

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Ex:
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/

/* 
REMARKS:
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

const minMaxProfit = arr => {
  const newArr = []
    if (arr.length >= 1) {
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      newArr.push(min, max)
    }
  return newArr;
}


console.log(minMaxProfit([1, 2, 3, 4, 5])); // should return 1, 5
console.log(minMaxProfit([2334454, 5])) // should return 5, 2334454
console.log(minMaxProfit([5])) // should return 5, 5
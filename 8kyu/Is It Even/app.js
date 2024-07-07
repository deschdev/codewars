/* 
IS IT EVEN?

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

const testEven = num => {
  return num % 2 === 0 ? true : false
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");
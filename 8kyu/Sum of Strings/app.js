/* 
SUM OF STRINGS

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Examples
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

*/

// Sum Numbers
const sumStr = (a, b) => {
  let sum = Number(a) + Number(b)
  let revert = String(sum);
  return revert;
}
console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39");
/* 
COVERT BOOLEAN VALUES INTO STRINGS

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

const boolToWord = bool => {
  if (bool == true) {
    return "Yes"
  } else {
    return "No"
  }
}

console.log(boolToWord(true), 'Yes');
console.log(boolToWord(false), 'No');

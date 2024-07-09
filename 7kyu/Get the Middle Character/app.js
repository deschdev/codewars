/* 
GET THE MIDDLE CHARACTER

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Ex: 
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

*/

const getMiddleCharacter = str => {
  // create the position and length varibles
  let position;
  let length;

  // checking IF str length modulus 2 is stricty equal to 1
  if (str.length % 2 === 1) {
    //if so the position is equal to half of the str's length divided by 2
    position = str.length / 2;
    // the result would be one character
    length = 1;
  } else {
    // else the position is equal to the half of the str's length divided by 2 minus 1
    position = str.length / 2 - 1;
    // the result would be two chracters
    length = 2;
  }
  return str.substring(position, position + length);
}

console.log(getMiddleCharacter("test"),"es");
console.log(getMiddleCharacter("testing"),"t");
console.log(getMiddleCharacter("middle"),"dd");
console.log(getMiddleCharacter("A"),"A");
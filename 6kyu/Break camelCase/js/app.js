/* 
CORRECT THE MISTAKES OF THE CHARACTER RECOGNITION SOFTWARE

Complete the solution so that the function will break up camel casing, using a space between words.

Ex:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const wordBreak = (str) => {
  let newStr = ""
  for (letter of str) {
    if (letter == letter.toUpperCase()) {
      newStr += " ";
      newStr += letter;
    } else {
      newStr += letter;
    }
  }
  return newStr;
}

console.log(wordBreak("camelCasing"), "|| should be: camel Casing");
console.log(wordBreak("camelCasingTest"), "|| should be: camel Casing Test");
console.log(wordBreak(""), "|| should be: ''");
console.log(wordBreak("baklava"), "|| should be: baklava")
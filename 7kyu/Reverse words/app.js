/* 
Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Ex:

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."))
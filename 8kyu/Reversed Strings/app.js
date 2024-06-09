/* 
REVERSED STRINGS

Complete the solution so that it reverses the string passed into it.

Ex: 

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

const solution = (str) => {
  return str.split("").reverse().join("")
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');
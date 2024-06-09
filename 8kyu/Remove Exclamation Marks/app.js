/* 
REMOVE EXCLAMATION MARKS

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

const removeExclamationMarks = (str) => {
  const removeExcla = str.split("").filter((character) => character !== "!" )

  return removeExcla.join("")
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");
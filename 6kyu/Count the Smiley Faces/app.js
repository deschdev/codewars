/* 
COUNT THE SMILEY FACES!

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Ex:
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

const countSmileys = arr => {
  const eyes = [':', ';'];
  const noses = ['-', '~'];
  const mouths = [')', 'D'];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const smiley = arr[i];

    if (smiley.length === 2) {
      if ( eyes.includes(smiley[0]) && mouths.includes(smiley[1]) ) {
        count++
      }
    } else if (smiley.length === 3) {
      if ( eyes.includes(smiley[0]) && noses.includes(smiley[1]) && mouths.includes(smiley[2])) {
        count++
      }
    }
  }
  return count;
}


console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
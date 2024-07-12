/* 
SWITCH IT UP!
When provided with a number between 0-9, return it in words.

Ex:
Input :: 1
Output :: "One".
*/

const switchItUp = num => {
  switch (num) {
    case 0: {
      return "Zero";
      break;
    }
    case 1: {
      return "One";
      break;
    }
    case 2: {
      return "Two";
      break;
    }
    case 3: {
      return "Three";
      break;
    }
    case 4: {
      return "Four";
      break;
    }
    case 5: {
      return "Five";
      break;
    }
    case 6: {
      return "Six";
      break;
    }
    case 7: {
      return "Seven";
      break;
    }
    case 8: {
      return "Eight";
      break;
    }
    case 9: {
      return "Nine";
      break;
    }
    default: {
      return "That number doesn't matter";
      break;
    }
  }
}

console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");
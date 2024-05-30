/* 
ROCK PAPER SCISSORS

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  if ((p1 === "rock".toLowerCase() && p2 === "scissors".toLowerCase()) || (p1 === "paper".toLowerCase() && p2 === "rock".toLowerCase()) || (p1 === "scissors".toLowerCase() && p2 === "paper".toLowerCase()) ) {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!"
  } else {
    return "Player 2 won!"
  }
};
/* 
REDUCE BUT GROW

Given a non-empty array of integers, return the result of multiplying the values together in order.

Ex:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/
function grow(x){
  x.reduce((a, b) => a * b, 1);
}

grow([1, 2, 3]);

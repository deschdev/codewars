/* 
GRASSHOPPER MESSI GOALS

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

Ex:
5, 10, 2  -->  17
*/

const goals = (laLigaGoals, copaDelReyGoals, championLeagueGoals) => {
  return laLigaGoals + copaDelReyGoals + championLeagueGoals;
}

console.log(goals(0,0,0), 0)
console.log(goals(43, 10, 5), 58)

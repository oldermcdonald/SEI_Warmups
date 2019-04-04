// Warmup wk2 Wednesday
// Dave

/*
Mini Golf
Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.

Bob
Hole 1 = 3
Hole 2 = 2
Hole 3 = 6
Hole 4 = 11
Hole 5 = 9
Hole 6 = 2
Hole 7 = 6
Hole 8 = 9
Hole 9 = 10

Jimbo
Hole 1 = 5
Hole 2 = 12
Hole 3 = 9
Hole 4 = 22
Hole 5 = 13
Hole 6 = 7
Hole 7 = 16
Hole 8 = 10
Hole 9 = 11

Fish
Hole 1 = 2
Hole 2 = 2
Hole 3 = 4
Hole 4 = 5
Hole 5 = 4
Hole 6 = 3
Hole 7 = 6
Hole 8 = 4
Hole 9 = 1

Extension
Now work out each golfers round compared to the course par.

Par
Hole 1 = 3
Hole 2 = 4
Hole 3 = 5
Hole 4 = 5
Hole 5 = 3
Hole 6 = 3
Hole 7 = 4
Hole 8 = 3
Hole 9 = 5

Ninja Extension
Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.
*/


var totalScore = function(player) {
  var total = 0;
  for (i=0; i<player.length; i++) {
    total = total + player[i];
  }
  return total;
}

var parCompare = function(player, par) {
  parResult = 0;
  for (i=0; i<player.length; i++){
    parResult = parResult + (player[i] - par[i]);
  }
  return parResult;
  // if(parResult > 0){
  //   return (`${parResult} over par`);
  // } else {
  // return (`${parResult} under par`);
  // }
}

var bet = function(player, betAmount){
  var winnings = betAmount * parCompare(player, par);
  return winnings;
}


var par = [3,4,5,5,4,4,4,3,5];

// Player Scores
var bob = [3,2,6,11,9,2,6,9,10];
var jimbo = [5,12,9,22,13,7,16,10,11];
var fish = [2,2,4,5,4,3,6,4,1];
var combinedScore = totalScore(bob) + totalScore(jimbo) + totalScore(fish);

// Print Scores
console.log('Bob scored: ' + totalScore(bob));
console.log('Jimbo scored: ' + totalScore(jimbo));
console.log('Fish scored: ' + totalScore(fish));
console.log('Combined player score: ' + combinedScore);

// Print Par Comparison
console.log('Bob par compare: ' + parCompare(bob, par));
console.log('Jimbo par compare: ' + parCompare(jimbo, par));
console.log('Fish par compare: ' + parCompare(fish, par));

console.log('Fish wins: $' + (bet(bob,1) + bet(jimbo,1)) );


// Warmup Wk3 - Monday
/*
The Ultimate Life Decider
Never make a decision again!

Core problem
Create a file called decider.js
Write a function called coinFlip that will console.log HEADS or TAILS when called
Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.

Extension
Create a file called decider.html
Find any coin image online
Link the .js file, while you're there you may also decide to add a .css file for some styling
Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.
*/


// Get DOM elements
var coin = document.querySelector('.coin');
var headsDisplay = document.querySelector('.heads-display span');
var tailsDisplay = document.querySelector('.tails-display span');


// Global variables
var headsCount = 0;
var tailsCount = 0;


// Flip the coin
var coinFlip = function() {
  var outcome = Math.random();
  // Round up or down to return 1 or 0
  if(outcome < 0.5 ? outcome = Math.floor(outcome) : outcome = Math.ceil(outcome));
  // Heads represented by 1
  if (outcome == 1) {
    headsCount ++;
    // Update DOM
    headsDisplay.textContent = headsCount;
    // Change img to heads
    coin.src = "heads.jpg";
    winCheck();
  } else {
    tailsCount ++
    // Update DOM
    tailsDisplay.textContent = tailsCount;
    // Change img to tails
    coin.src = "tails.jpg";
    winCheck();
  }
  return outcome;
}


// Check winning condition
var winCheck = function(){
  if((headsCount === 5 || tailsCount === 5)) {
    if (headsCount > tailsCount) {
      console.log("WINNER 5 HEADS");
    } else {
      console.log("WINNER 5 TAILS");
    }
    // reset upon winning
    headsCount = 0;
    tailsCount = 0;
  }
}

// Event listeners
coin.addEventListener('click',coinFlip);

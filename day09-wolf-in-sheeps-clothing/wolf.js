// Warmup Wk2 Thursday
/*
A wolf in sheep's clothing
You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
*/


// Sheppard is at the end of the flock
// Search for wolf in flock
// if wolf is at end of the flock near sheppard then shoo wolf
// otherwise warn sheep in front of wolf


// Find wolves in the flock
var findWolves = function(flock) {
  var wolveLocations = [];
  for (i=0; i<flock.length; i++){
    if (flock[i] == 'wolf') {
      wolveLocations.push(i);
    }
  }
  return wolveLocations;
}


var warnTheSheep = function(flock) {
  flock.reverse(); // mutates the array
  wolveIndexes = findWolves(flock);
  // iterate through each wolf location
  for (i=0; i<wolveIndexes.length; i++){
    sheepToBeEaten = wolveIndexes[i] + 2;
    if (wolveIndexes[i] == 0){
      console.log('Pls go away and stop eating my sheep');
    } else {
      console.log(`Oi! sheep number ${sheepToBeEaten}! You are about to be eaten by a wolf!`);
    }
  }
}

// make a new randomised flock
var generateFlock = function(numSheep, numWolves){
  orderedFlock = [];

  for (i=0; i < numSheep; i++){
    orderedFlock.push('sheep');
  }
  for (i=0; i < numWolves; i++) {
    orderedFlock.push('wolf');
  }
  // randomise array
  var randomizedFlock = [];
  for (i=0; i < orderedFlock.length; i++){
    var randomIndex = Math.floor(Math.random() * orderedFlock.length);
    var randomAnimal = orderedFlock[randomIndex]
    randomizedFlock.push(randomAnimal);
    // error as sometimes it doesnt push a wolf!
  }
  return randomizedFlock;
}


var flock = generateFlock(7,1);
console.log('New flock = ' + flock)
warnTheSheep(flock);

// var flock = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];

// Extensions:
// Randomise wolfs position in flock
// Make flock size adjustable
// Add more wolves to flock

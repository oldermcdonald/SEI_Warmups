//Wk 02 Friday Warmup

/*
Filter Out the Geese
Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/


var birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

var birdsWithoutGeese = [];


// First method of looping
var gooseFilter1= function(birds, geese){
  birds = birds.filter(function(animal){
    return !geese.includes(animal);
  })
  return birds;
}

// console.log(gooseFilter1(birds, geese));



// Second method of looping
var gooseFilter2 = function(){
  for (i=0; i<birds.length; i++){
    if (geese.indexOf(birds[i]) === -1) {
      birdsWithoutGeese.push(birds[i]);
    }
  }
  console.log(birdsWithoutGeese)
}



// Third method of looping
var gooseFilter3 = function(){
  birds.forEach(function(bird){
    if (geese.indexOf(bird) === -1) {
      birdsWithoutGeese.push(bird);
    }
  })
  console.log(birdsWithoutGeese)
}



// Fourth method of looping
var birdsWithoutGeese = birds.filter(function(bird){
  return geese.indexOf(bird) === -1;
})


console.log(gooseFilter3())




// Extension - manipulate the dom // Work in progress

// var userInput = document.querySelector('.userInput');
// var goBtn = document.querySelector('.goBtn');
// var output = document.querySelector('.output');

// var runFunc = function(){
//   animals = userInput.filter(function(animal){
//     return !geese.includes(animal);
//   })
//   output.textContent = animals;
// }

// goBtn.addEventListener('click', runFunc)
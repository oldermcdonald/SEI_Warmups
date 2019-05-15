/*
WDI Week 7 - Tues - Warmup

It belongs in a museum!
You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

// Sample output:

treasureFinder(map1) // should return [2, 2];
You can assume that the size of the treasure map will be the same.

Some additional maps:
var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];
Bonus:
Modify your function to accept maps of any size, and to accept a second argument for the key to look for. It should also handle non-unique 'key' values gracefully.

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

//sample outputs:

treasureFinder(holyGrailMap, "G") // should return [4, 2];
treasureFinder(holyGrailMap, "H") // should return [5, 2];
treasureFinder(holyGrailMap, "H") // should return [5, 2];

treasureFinder(holyGrailMap, "V") // should return 'that doesnt belong in a museum!';
*/


var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];



// --- PART 1 ---

// var treasureFinder = function (array) {
//   var treasure = 'X';
//   for (col=0; col < array.length; col++) {
//     for (row=0; row < array[col].length; row++) {
//       if (array[col][row] == treasure) {
//         return `[${col}, ${row}]`
//       }
//     }
//   }
// }
// console.log(treasureFinder(map1));




// --- EXTENSION ---

var holyGrailMap = [
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","G","v","S","S"],
  ["v","v","H","v","S","S"],
  ["v","v","V","v","S","S"],
  ["A","V","A","A","A","S"]
  ];

// var treasureFinder = function (array, key) {
//   var foundKeys = [];
//   var keyPosition = [];
//   for (col=0; col < array.length; col++) {
//     for (row=0; row < array[col].length; row++) {
//       if (array[col][row] == key) {
//         foundKeys.push(array[col][row]);
//         keyPosition.push(col,row);
//       }
//     }
//   }
//   if (foundKeys.length == 1){
//     return keyPosition.join(', ');
//   } else {
//     return 'Does not belong in museum'
//   }
// }

// console.log(treasureFinder(holyGrailMap, 'H'));



// Allens Solution
var treasureFinder = function (map, treasure) {
  var treasureY;
  var treasureX;
  var museum = ['X','G', 'H', 'H'];
  map.forEach(mapX => {
    mapXIndex = mapX.indexOf(treasure)
    if (mapXIndex !== -1) {
      treasureY = mapYindex;
      treasureX = map.indexOf(mapX);
    }
  });
  if(museum.indexOf(treasure) == -1) {
    console.log("that doesnt belong in a museum!")
  } else {
    console.log(``)
  }
}
console.log(treasureFinder(holyGrailMap, 'H'));




// Arjuns Solution
function treasureFinder(map, treasure){
  xPosition = null;
  yPosition = null;

  if(treasure == "V"){
      return "That doesn't belong in the museum!"
  }
  // Look for the treasure within the array
  map.forEach(function(value, index){
      if (value.includes(treasure)){
          // console.log(index);
          yPosition = index;
          // console.log(value.indexOf("X"));
          xPosition = value.indexOf(treasure);
      };
  });
  // Check the treasure has been found
  if(xPosition == null || yPosition == null){
      return "No treaure was found!"
  }else{
      return `The Treasure can be located at [${xPosition}, ${yPosition}]`
  };    
}
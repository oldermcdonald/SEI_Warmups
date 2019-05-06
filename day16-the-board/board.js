// GA Warmup Day 16 - Monday 15 April 2019

/*
The Board
Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #

Extension
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead.
*/


// '#_#_#_#_#_#_#_#\n_#_#_#_#_#_#_#_#\n#_#_#_#_#_#_#_#'




// First Attempt

// for (i=0; i<boardSize*boardSize; i++) {
//   if (i%(boardSize*2)==0){boardSize
//     chessBoard += '\n';
//   }
//   else if (i%2==0){
//     chessBoard += '_';
//   }
//   else {
//     chessBoard += symbol;
//   };
// }


// Second Attempt

// for(i=0; i<boardSize; i++){
//   if (i%2==0) {
//     chessBoard += '\n'
//   } else {
//     for (j=0; j<boardSize*2; j++){
//       if (j%2==0) {
//         chessBoard += '_';
//       } else {
//         chessBoard += symbol;
//       }
//     }
//   }
// }


// Third Attempt

// var boardSize = 8;
// var symbol = '#';
// var chessBoard = '';

// for (rowIndex = 0; rowIndex < boardSize; rowIndex++) {
//   for (colIndex = 0; colIndex < (boardSize * 2); colIndex++) {
//     if (rowIndex > 0 && colIndex % (boardSize * 2) === 0) {
//       chessBoard+= '\n';
//     } else if (rowIndex % 2 === 0) {
//       if (colIndex % 2 === 0) {
//         chessBoard+= symbol;
//       } else {
//         chessBoard+= ' ';
//       }
//     } else {
//       if(colIndex % 2 === 0) {
//         chessBoard+= ' ';
//       } else {
//         chessBoard+= symbol;
//       }
//     }
//   }
// }
// console.log(chessBoard);



// Shen's Method
// for (var rowIndex = 0; rowIndex < 8; rowIndex++) {
//   for (var columnIndex = 0; columnIndex < 8; columnIndex++) {
//     if (rowIndex % 2 === 0) {
//       chessBoard += '# ';
//     } else {
//       chessBoard += ' #';
//     }
//   }
//   console.log(chessBoard);
//   chessBoard = '';
// }



// Bam's Method
// var space = ' '
// var createPattern = function(size, symbol) {
//   for (row = 0; row < size; row++) {
//     if (row % 2 === 0) {
//       var symbolFirst = symbol + space;
//       console.log(symbolFirst.repeat(size))
//     } else {
//       var spaceFirst = space + symbol;
//       console.log(spaceFirst.repeat(size))
//     }
//   }
// }
// createPattern(8, '|');



// Sara's Method
// var size = 5;
// var symbol = "*";
// var chessBoard = " ";

// for(var row = 1; row <= size; row++) {
//   for(col = 1; col <= size; col++) {
//     if(isEven()) {
//       chessBoard  +=` ${symbol}`;
//     } else {
//       chessBoard += `${symbol} `;
//     }
//   }
//   console.log(chessBoard);
//   chessBoard = " ";
// }
// function isEven() {
//    return row % 2 == 0 
// }
// Warmup Wk 3 - Tuesday

/*
Make Them Green
Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
When you click on any box, it's background color should immediately become red.
After every box has been clicked, change all of them immediately to green.
*/



// Get DOM Elements
var boxItems = document.querySelectorAll('.colour-box');

var changer = function(event){
  console.log('box clicked');
  // Check if all are green and remove
  if (document.querySelectorAll('.green').length == boxItems.length) {
    boxItems.forEach(function(item){
      item.classList.remove('green')
    })
  }
  // Change clicked box to red
  event.target.classList.toggle('red')
  // Once all boxes are red, change all boxes to green
  if (document.querySelectorAll('.red').length == boxItems.length) {
    console.log('all boxes clicked')
    boxItems.forEach(function(item){
      item.classList.add('green')
    })
  }
}

// Event listeners
boxItems.forEach(function(item){
  item.addEventListener('click', changer)
})


// Possible extensions
// 1. Make colour transition fade

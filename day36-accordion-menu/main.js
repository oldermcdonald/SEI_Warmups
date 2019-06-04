// SEI Warmup - Wk 8 - Friday

// build an accordion menu like the one in the image above.
// All menu items except the first should be hidden by default. Clicking on one should reveal it. Clicking again should hide it. Your accordion menu should work with any number of list items (not hardcoded to 3, for example). You can use jQuery, but write your own code for the implementation.

// Extension
// Try to mimic the design above as closely as you can. Use an icon framework like fontawesome to add the icons.

// trivia: This was given to one of the previous WDI students as a coding test.


// Get DOM elements
const menuHeaders = document.querySelectorAll('.menu-item header');
const menuItems = document.querySelectorAll('.menu-item');
const menuLinks = document.querySelectorAll('.menu-links')

const handleClick = event => {
  console.log('clicked')

  // First hide all menu links
  menuHeaders.forEach(menuHead => {
    menuHead.
  })


  // Then turn on hide class on target
  // (if condition to check if turned off)


}


// Event listeners
menuHeaders.forEach(menuHead => {
  menuHead.addEventListener('click', handleClick)
})


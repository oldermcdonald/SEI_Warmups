// SEI Warmup Wk10 - Friday
/*

Clocks!!!!
cue Coldplay
Today you are going to build a clock as a pure front-end app!

Step 1 - Get time
Use the correct JavaScript function to get the current time and display in digital form showing hours, minutes and seconds e.g. 09:15:27.

Step 2 - Update time
Try using setInterval function to keep getting the time every second (so that you can show time updating every second)

Extension:
Step 3 - Go analogue!
It's time to make your clock analogue! Create the necessary DOM elements for the shape of the clock and the hour, minute and second hands.

Step 4 - Complete moving clock
Get the hour, minute and second hands to move as time changes e.g. (each second that passes, the second hand should move).
To get the hands to rotate around the clock, you should look into the css property: transform: rotate().
Hints: If you're stuck with making the analogue clock, try taking a look at this: https://css-tricks.com/css3-clock/

*/


// Get DOM Elements
const timeSpan = document.querySelector('h2 span');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');


const getTime = () => {
  let today = new Date();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  return time
}


const updateClock = () => {
  // update digital clock
  timeSpan.textContent = getTime()

  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  // update css angles
  let sdegree = seconds * 6 === 360 ? secondHand.classList.toggle('animate') : seconds * 6 ;

  let mdegree = minutes * 6;
  let hdegree = hours * 30 + (minutes / 2);

  secondHand.style.transform = `rotate(${sdegree}deg)`
  minuteHand.style.transform = `rotate(${mdegree}deg)`
  hourHand.style.transform = `rotate(${hdegree}deg)`

}

// if condition to add and remove transition class

setInterval(updateClock, 1000)

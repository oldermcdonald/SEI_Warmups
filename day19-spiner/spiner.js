// SEI Warmup Wk4 Thursday - Dave

/*
Finish Him!
In JavaScript, write a function 'spiner' that takes a string as an argument and returns the string as all lowercase words joined by dashes. Your function should account for upper/lower case inputs, as well as sentences not seperated by spaces.

spiner("All Lowercase Words Joined By Dashes") --> // "all-lowercase-words-joined-by-dashes"

spiner("The_Andy_Griffith_Show") --> // "the-andy-griffith-show"
*/

var spiner = function(string){
return string.split(' ').join('-').split('_').join('-').toLowerCase()
}

console.log(spiner("Hey_There BOB"));

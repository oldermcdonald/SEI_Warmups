// Warmup Wk2 - Monday - Dave
// Test against palidromes

// A Santa at Nasa


var cleanText = function(input) {
    // Remove punctuation with regex
    var removePunctuation = input.replace(/\W/g, '');
    // Make lowercase
    var makeLowercase = removePunctuation.toLowerCase();
    // Remove spaces
    var removeSpaces = makeLowercase.split(' ');
    // Join back together
    var joinString = removeSpaces.join('');
    return joinString;
}

var reverseString = function(str) {
    return str.split('').reverse().join('');
}

var palindromeCheck = function (str) {
    // Run clean text function
    var userInputMod = cleanText(str);
    // Run reverse input function
    var reversedStr = reverseString(userInputMod);
    // Evaluate if true
    if (userInputMod == reversedStr) {
        console.log(`'${userInputMod}' is a palidrome`)
    } else {
        console.log(`'${userInputMod}' is not a palidrome`)
    }
}

var userInput = prompt('Enter a word');
console.log(palindromeCheck(userInput))
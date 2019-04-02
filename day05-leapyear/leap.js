// 1. Create an algorithm to return leap years of last 100 years

var date = new Date();
var currentYear = date.getFullYear();
var yearList = [];
var searchYears = 100;
var leapYears = []

for (i=0; i<=searchYears; i++) {
    year = currentYear - [i];
    yearList.push(year)
    // if leap year then push to leap year array
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        leapYears.push(year);
    }
}
console.log(`Leap years of last ${searchYears} years: ${leapYears.join(' ')}`)




// 2. Print out multiples of 7 and every second odd number between 1 & 200

var numbers = [];
var multiplesOfNum = [];

for (i=0; i<=200; i++) {
    // Print out multiples of 7
    numbers.push(i)
    if (i % 7 == 0){
        multiplesOfNum.push(i);
    }
}
console.log(`These numbers are multiples of 7: ${multiplesOfNum.join(', ')}`)





// 3. Print out every second odd number
var oddNumbers = [];
var secondOddNumbers = [];

for (i=0; i<=numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(i);
    }
}
console.log(`Here's all the odd numbers: ${oddNumbers.join(', ')}`); 

for (i=0; i<=oddNumbers.length; i++){
    if (i % 2 !== 0) {
        secondOddNumbers.push(oddNumbers[i]);
    }
}
console.log(`Here's every second odd number: ${secondOddNumbers.join(', ')}`);




// 4. Print out all prime numbers between 0 and 200

// what is a prime number:
// a number greater than one
// can only be divided by 1 and itself

var testPrime = function(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for(i=2; i<n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(testPrime(3))

// infinite loop
for(i=0; i<=10; i++){
    if (testPrime(i)) {
        console.log(i + ' is a prime number');
    }
}
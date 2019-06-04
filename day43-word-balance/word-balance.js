// SEI Warmup Wk10 - Tuesday

/*
Word Balance
We're going to balance words on one of the letters in them.

We'll use the position and letter itself to calculate the weight around the balance point. A word can be balanced if the weight on either side of the balance point is equal. Not all words can be balanced, but those that can are interesting for this challenge.

The formula to calculate the weight of the word is to look at the letter position in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight, then multiply that by the distance from the balance point, so the first letter away is multiplied by 1, the second away by 2, etc.

As an example:

STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))
Input Description - You'll be given a series of English words.

Example: STEAD

Output Description - Your program or function should emit the words split by their balance point and the weight on either side of the balance point.

Example: S T EAD - 19

This indicates that the T is the balance point and that the weight on either side is 19.

Try these words...
CONSUBSTANTIATION
WRONGHEADED
UNINTELLIGIBILITY
SUPERGLUE
Challenge Output```

#### Output should be...
CONSUBST A NTIATION - 456 WRO N GHEADED - 120 UNINTELL I GIBILITY - 521 SUPERGLUE DOES NOT BALANCE```
*/



// first list out the letter weights
const letterWeight = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

const getLetterWeight = (letter) => {
  return letterWeight[letter];
}


const getBalancePoint = (word) => {

  // First convert word into array with weights
  let array = word.toLowerCase().split('').map( arrayLetter => {
    return getLetterWeight(arrayLetter);
  })

  console.log(`Converted '${word}'' into weights: [${array}]`)
  console.log(`Find fulcrum (balance point)`)
  
  // Fulcrum starts at left and slides through each index position
  for (fulcrum = 1; fulcrum < (array.length - 1); fulcrum++) {

    console.log(`Slide fulcrum to index ${fulcrum} (${array[fulcrum]})`)
    let weightLeft = 0;
    let weightRight = 0;

    // Calculate weight of all elements to left of fulcrum
    for (indexLeft = 0; indexLeft < fulcrum; indexLeft++) {
      console.log(`Calculating weight of ${array[indexLeft]} * ${fulcrum - indexLeft}`)
      weightLeft += array[indexLeft] * (fulcrum - indexLeft);
    }

    // Calculate weight of all elements to right of fulcrum
    for (indexRight = array.length -1; indexRight > fulcrum; indexRight--) {
      console.log(`Calculating weight of ${array[indexRight]} * ${indexRight - fulcrum}`)
      weightRight += array[indexRight] * (indexRight - fulcrum);
    }

    console.log(`Weight on left: ${weightLeft}`)
    console.log(`Weight on right: ${weightRight}`)

    // Check for match
    if (weightLeft == weightRight) {
      return (`Balance Found! Midpoint is: ${word[fulcrum]}`)
    }
  }
  return `Can not balance ${word}`
}

console.log(getBalancePoint('UNINTELLIGIBILITY'))


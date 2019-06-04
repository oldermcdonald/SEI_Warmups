// SEI Warmup Wk10 - Thursday - Dave

/*
Alternating Split
For building the encrypted string:

Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
Do this n times!
Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:

If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

*/



// Work out the pattern:

// T  h  i  s  _  i  s  _  a  _  t  e  s  t  !
// 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15

// h  s  i  _  _  e  t  T  i  _  s  a  t  s  !
// 2  4  6  8  10 12 14 1  3  5  7  9  11 13 15


function isOdd(n) {
  return n % 2 != 0;
}


function encrypt(text, n) {
  console.log(`encrypting ${n} times`)

  for (i = 0; i < n; i++){
    
    let secondLetters = "";
    let remainingLetters = "";
    let encryptedString = "";
    
    for (i = 0; i < text.length; i++) {
      if (isOdd(i)) {
        secondLetters += text[i];
      } else {
        remainingLetters += text[i];
      }
    }
    encryptedString = secondLetters + remainingLetters
    return encryptedString
  }
}


function decrypt(encryptedText, n){

}



console.log(encrypt('This is a test!', 2));
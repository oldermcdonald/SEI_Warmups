// [6,7,4,5,3,5,1] //=> 5

const findDuplicates = numberArray => {
  let sorted = numberArray.slice().sort();
  for (i=0; i<sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      return sorted[i]
    }
  }
}

// Bams solution
const findDuplicatesBam = array => {
  const duplicate = array.filter((number, index) => {
    array.indexOf(number) != index
  });
  return Number(duplicate[0]);
};


module.exports = findDuplicates;


/*
How does Bams indexOf work...
[6,7,4,5,3,5,1]

6 (index is 0) = 0 --> false
7 (index is 1) = 1 --> false
4 (index is 2) = 2 --> false
5 (index is 3) = 3 --> false
3 (index is 4) = 4 --> false
5 (index is 3) = 5 --> true
1 (index is 6) = 6 --> false
*/
// SEI Warmup Wk 10 - 
/*
Intersection Warmup
Credit to Axel for this warmup.

Please complete this warmup in JavaScript without the use of any libraries. 
You are given three arrays, write a function threeWayIntersection which only returns the common elements in all three arrays. For example:

threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9]) // => [3,4]
Extension
Now write a function which returns the common elements for n arrays. For example:

nWayIntersection([[3,9], [6,8,9], [1,9,10], [9], [9,11,14]]) // => [9]
*/




// map each number in array and compare with other arrays
// filter out numbers which occour in all arrays

const threeWayIntersection = (arr1, arr2, arr3) => {
  return arr1
         .filter(num => arr2.includes(num))
         .filter(num => arr3.includes(num))
}

console.log(`Common Element: [1,3,4,6], [2,3,4,7], [3,4,7,8,9]`)
console.log(threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9]))







// ---- EXTENSION ----


const nWayIntersection = (arrayOfArrays) => {
  arrayOfArrays.forEach( (array) => {
    arrayOfArrays[0] = array.filter(number => {
      arrayOfArrays[0].includes(number)
    })
  })
}




InfiniteWayIntersection = (...args) => {
  filtered = args[0]
  args.forEach(function(array) {
    filtered = array.filter(number =>
      filtered.includes(number))
  }
  console.log(filtered)
}
InfiniteWayIntersection([1, 2, 5], [2, 3, 4, 5], [2, 4, 5], [2, 3, 7, 8, 9, 5])



console.log(`Common Element [[3,9], [6,8,9], [1,9,10], [9], [9,11,14]]`)
console.log(nWayIntersection([[3,9], [6,8,9], [1,9,10], [9], [9,11,14]]))



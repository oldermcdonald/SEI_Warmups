/// SEI Warmup 
/*
given a list of unordered numbers
at least one number in the list has a duplicate

write a function return the first pair you found
write tests

for example
[6,7,4,5,3,5,1] //=> 5
*/

const findDuplicates =  require('./find-duplicates')

test('single duplicate', () => {
  const numList = [6,7,4,5,3,5,1];
  expect(
    findDuplicates(numList)
    ).toBe(5)
})

test('multiple duplicates', () => {
  const numList = [6,5,4,3,8,4,5,1];
  expect(
    findDuplicates(numList)
    ).toBe(4)
})
const toRoman = require('./roman-numerals')

test('1 returns I', () => {
  expect( toRoman(1) ).toEqual("I")
})

test('2 returns II', () => {
  expect( toRoman(2) ).toEqual("II")
})

test('3 returns III', () => {
  expect( toRoman(3) ).toEqual("III")
})

test('4 returns IV', () => {
  expect( toRoman(4) ).toEqual("IV")
})

test('5 returns V', () => {
  expect( toRoman(5) ).toEqual("V")
})
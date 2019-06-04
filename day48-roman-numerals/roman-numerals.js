function toRoman(number) {
  var roman = ""

  while (number >= 10) {
    number = roman - 10
    roman = roman + "X"
  }

  while (number >= 5) {
    number = roman - 5
    roman = roman + "V"
  }

  while (number > 0) {
    number = number - 1
    roman = roman + "I"
  }
  return roman
}

module.exports = toRoman
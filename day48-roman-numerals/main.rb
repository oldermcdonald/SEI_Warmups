# SEI Warmup Wk11 Tuesday - Dave

# Roman Numerals
# The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

# Write a function to convert from normal numbers to Roman Numerals: e.g.

#  1  => I
# 10  => X
#  7  => VII
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

# Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

# To see this in practice, consider the example of 1990.

# In Roman numerals 1990 is MCMXC:

# 1000=M 900=CM 90=XC

# 2008 is written as MMVIII:

# 2000=MM 8=VIII

# See also: http://www.novaroma.org/via_romana/numbers.html





# 1 = I
# 2 = II
# 3 = III
# 4 = IV
# 5 = V
# 6 = VI
# 7 = VII
# 8 = VIII
# 9 = IX
# 10 = X
# 11 = XI
# 12 = XII
# 13 = XIII
# 14 = XIV
# 15 = XIV

# Rules:
# express each digit separately from left to right
# skip any digit with value of 0
# May only list 3 consecutive numbers




# Give number 534 (Expect 'DXXXIV')

# is 534 divisible by 1000? => no
# ...
# is 534 divisible by 500? => yes
# How many fit into it? (quotient) => 1 >>'D'
# How many left over? (modulus) = 34

# is 34 divisible by 1000? => no
# ...
# is 34 divisible by 10? => yes
# How many fit into it? (quotient) => 3 >> 'XXX'
# How many left over? (modulus) => 4

# is 4 divisible by 1000? => no
# ...
# is 4 divisible by 4? => yes >> 'IV'

# Result = 'DXXIV'





def convert_to_roman(num)

  roman_numerals = {
    1000 => 'M',
    900 => 'CM',
    500 => 'D',
    400 => 'CD',
    100 => 'C',
    90 => 'XC',
    50 => 'L',
    40 => 'XL',
    10 => 'X',
    9 => 'IX',
    5 => 'V',
    4 => 'IV',
    1 => 'I',
  }

  result = ""

  roman_numerals.keys.each do |key|
    if num % key
  end

  return result
end


puts 'enter a number'
number = gets.chomp

puts convert_to_roman(number)

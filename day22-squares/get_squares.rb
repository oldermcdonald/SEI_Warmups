# Warmup SEI - Wk 5 - Friday - Dave

# Ruby Squares!
# squares

# A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

# Make a new file called get_squares.rb.

# Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

# NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

# get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]
# Done?
# Solve it with a JavaScript function!

# Store your solution in a new file called getSquares.js and run it in the console.

# HINT: Sorting an array of numbers with .sort in JS would produce the following...

# getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]
# What's that all about?!?!?!



def get_squares(num_array)
  perfect_squares = num_array.select do |num|
    Math.sqrt(num) % 1 == 0
  end
  perfect_squares.sort.uniq
end

p get_squares([3,64,24,9,52,7,43,76,9,22,64,1,16])
# SEI Warmup Wk 6 - Wed - Dave

# Even Multiples
# Write a method called even_multiples that takes a list_of_numbers and returns only numbers that are even AND multiples of 5.

# For example the list_of_numbers could be [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5].

require 'pry'

def even_multiples(list_of_numbers)
  num_list = list_of_numbers.select do |num|
    if even?(num) && multiple?(num, 5)
      num
    end
  end
  num_list
end


def even?(num)
  num % 2 == 0 ? true : false
end


def multiple?(num, multiplier)
  num % multiplier == 0 ? true : false
end


p even_multiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5])
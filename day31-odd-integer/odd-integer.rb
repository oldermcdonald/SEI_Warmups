# Warmup Wk7 - FRIDAY - Dave

# You have an array of integers. Find the integer that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], answer is 5 since it is the only number that appears an odd number of times.

require 'pry'

array = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

counter = Hash.new(0)

array.each do |int|
  counter[int] += 1
end

puts counter

counter.each do |key, value|
  # puts key
  # puts value
  if value.odd?
    puts key
  end
end
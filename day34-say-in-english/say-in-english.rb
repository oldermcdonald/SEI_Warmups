# SEI Warmup Wk8 - Wed - Dave

# Say it in English
# Write a program that will take a number from 0 to 99 and spell out that number in English. Please avoid using any gems to help you with this, you must write the algorithm yourself.

# For example, if the input to the program is 22, then the output should be 'twenty-two'

# e.g.

# Say.new(22).in_english
# Say.new(-1).in_english
# # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
# The program must also report any values that are out of range.

# Some good test cases for this program are:

# 0
# 14
# 50
# 98
# -1
# 100
# Extensions
# Re-write the method for the Integer class.

require 'pry'

class Say

  def initialize(input)
    # check that input is actually a number
    if input.length != input.to_i.digits.length
      puts "#{input} is not a valid number"
      return
    end
    @num = input.to_i
    if @num >= 0 && @num < 100
      puts "Now converting '#{@num}'"
      puts in_english(@num)
    else
      puts "Can't convert '#{@num}'. Number must be between 0 and 99, inclusive."
    end
  end

  
  def in_english(num)
    below20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']


    above20 = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    # numbers below 20
    if num < 20
      return below20[num].capitalize
    end
    
    # numbers above 20
    if num >= 20
      combined = []
      combined << above20[num.digits.last-2]
      if num.digits.first !=0
        combined << below10[num.digits.first]
      end
      return combined.join('-').capitalize
    end

  end

end

puts 'enter a number between 0 and 99, inclusive'
input = gets.chomp

Say.new(input)


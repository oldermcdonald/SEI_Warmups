# SEI Warmup Week 6 - Tues - Dave

# Dice
# Write a program using classes to generate a standard dice roll.

# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem

# It should give you a different result each time.

# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

# Dice.roll(3)
# # => [2,5,1]
# Extension
# Write a method called total you can chain directly after Dice.roll(n), and will return you the dice and the total, like so:
# Dice.roll(4).total
# # => [[6,3,2,4], 15]
# Note: To achieve the above, you will need to change the Dice.roll(n) method, so that it no longer returns the array.

# Display die faces after rolling.
# ________
# | *  * |
# | *  * |
# ________



require 'pry'

class Dice

  def self.roll(n_rolls)
    @@roll_results = []
    n_rolls.times do
      result = rand(1..6)
      puts "You rolled: #{result}"
      puts display(result)
      @@roll_results << result
    end
    puts "Roll summary: #{@@roll_results}"
    self
  end

  def self.total
    total = 0
    @@roll_results.each do |num|
      total += num
    end
    puts "Total of rolls: #{total}"
  end

  def self.display(side)
    if side == 1
      one_roll
    elsif side == 2
      two_roll
    elsif side == 3
      three_roll
    elsif side == 4
      four_roll
    elsif side == 5
      five_roll
    elsif side == 6
      six_roll
    end
  end

  def self.one_roll
    "_______ 
    |       |
    |   *   |
    |       |
    ‾‾‾‾‾‾‾ "
  end

  def self.two_roll
    "_______ 
    |     * |
    |       |
    | *     |
    ‾‾‾‾‾‾‾ "
  end

  def self.three_roll
    "_______ 
    |     * |
    |   *   |
    | *     |
    ‾‾‾‾‾‾‾ "
  end

  def self.four_roll
    "_______ 
    | *   * |
    |       |
    | *   * |
    ‾‾‾‾‾‾‾ "
  end

  def self.five_roll
    "_______ 
    | *   * |
    |   *   |
    | *   * |
    ‾‾‾‾‾‾‾ "
  end

  def self.six_roll
    "_______ 
    | *   * |
    | *   * |
    | *   * |
    ‾‾‾‾‾‾‾ "
  end
  
end


p Dice.roll(4).total
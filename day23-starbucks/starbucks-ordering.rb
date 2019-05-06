# Warmup - Wk6 - Monday

# Starbucks
# Write a program that holds on to coffee orders.

# c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."

# Extension
# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.
# puts c1
# # => "Barrel's latte, medium, 2 sugars."
# When you make an order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling c1.ready? and have the program yell out the order and the misspelled name if its ready.

require 'pry'

class Coffee

# Create getters & setters
attr_accessor :name, :order, :size, :sugar_qty

  def initialize(name, order, size, sugar_qty)
    @name = name
    @order = order
    @size = size
    @sugar_qty = sugar_qty
    @order_time = Time.new
  end

  
  def to_s
    "#{wrong_name}'s #{@order}, #{@size}, #{@sugar_qty} sugars."
  end


  def wrong_name
    @wrong_name = @name.sub(@name[0],"B")
  end


  def ready?
    @current_time = Time.new
    @wait_minutes = 1 # make random between 2-5 minutes
    if @current_time - @order_time > (@wait_minutes * 60)
      return "Ready: #{to_s}"
    else
      false
    end
  end


end


c1 = Coffee.new("Dave", "Latte", "Small", 1)

puts c1

binding.pry
# WDI Warmup Wk 5 - Wednesday

# Lunch Orders
# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!




# Initial data structure
# orders [{
#   name => "Bob"
#   items => ["Sandwich", "coke", "milk", "bread"]
# },{
#   name => "Jill"
#   items => ["Sugar", "Flour"]
# }]


# Better data structure optimized for lookup
# orders = {
#   "Dave" => ["Sandwich", "coke", "milk", "bread"],
#   "Jill" => ["Sugar", "Flour"]
# }



require 'pry'

$orders = {}

def collect_order
  puts "Enter your name"
  name = gets.chomp
  puts "#{name} wants to order: "
  order_item = gets.chomp
  # If name exists as key add to their order
  if $orders.key?(name)
    $orders[name].push(order_item)
  else
    # Otherwise make new key and add item
    $orders[name] = []
    $orders[name].push(order_item)
  end
end

keep_ordering = true
while keep_ordering do
  collect_order
  puts "Make another order? y/n"
  if gets.downcase.chomp == "n"
    keep_ordering = false
  end
end

puts "Here are the orders: "
$orders.each do |name, items|
  if items.length > 1
    item_list = items[0..-2].join(', ') + " and " + items.last
    puts "#{name} ordered #{item_list}"
  else
    puts "#{name} ordered #{items.join('')}"
  end
end
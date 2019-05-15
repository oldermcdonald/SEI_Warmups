# SEI Warmup Wk 8 - Dave

# Card Traders
# Alfred and Peter are best friends and Pokemon card traders. Each week they get together and decide to buy a new pack of Pokemon trading cards. Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.

# Alfred and Peter have not opened the pack yet, but it contains the following cards:

# Name	Attack
# Pikachu	40
# Rattata	20
# Pidgeot	60
# Alakazam	80
# Butterfree	30
# Gengar	70
# Moltres	100
# Vulpix	40
# Blastoise	80
# Hitmonchan	50
# Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)

# They are about to open the pack of cards, and they have a ritual for deciding who gets to keep each card in the pack.

# Do each of the following with your data structure:

# 2a) Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.

# 2b) They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

# 2c) Alfred takes the first pile of cards, and Peter takes the second pile. Create a new data structure for Alfred and Peter and pass them the cards.

# Extension
# 2d) At this point only two piles of cards are leftover, one with 3 cards, and one with 1 card. They decide to arm-wrestle once, where the winner gets the pile with 3 cards, and the loser gets the remaining pile. Historically Alfred wins 7 out of 10 times, so write code that decides which pile each person gets.

require 'pry'

cards = [
  {Pikachu: 40},
  {Rattata: 20},
  {Pidgeot: 60},
  {Alakazam: 80},
  {Butterfree: 30},
  {Gengar: 70},
  {Moltres: 100},
  {Vulpix:	40},
  {Blastoise: 80},
  {Hitmonchan: 50}
]

# 1. Reverse order of pack
cards.reverse!

# 2. Split pack into groups of 3 (3,3,3,1)
piles = cards.each_slice(3).to_a

# 3. Alfred takes first pile, Peter second
alfred = []
peter = []

alfred << piles[0]
peter << piles[1]
piles.shift
piles.shift

# 4. 70% chance Alfred gets remaining 3 pile
num = rand(1..10)
if num < 7
  alfred << piles[0]
  peter << piles[1]
elsif
  alfred << piles[1]
  peter << piles[0]
end

puts "Alfred got #{alfred}"
puts "Peter got #{peter}"

binding.pry
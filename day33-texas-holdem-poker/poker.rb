# SEI Warmup Wk8 - Tuesday

# Texas Hold 'em Poker.
# Description:

# For those who want to know more about Texas Hold 'Em Poker or just need a refresher. Check Wikipedia Article on Texas Hold 'Em Poker For the first challenge we will simulate the dealing part of the game.

# Input:
# You will be asked how many players 2 to 8. You will always be one of the players and you are facing 1 to 7 other computer controlled players.

# Output:
# Display the 2 cards each player is dealt and the display the 5 community cards. Format is left up to you. (The exact method of the output a card. For my examples I am using verbal words but someone might use unicode symbols for the card suit or other. You design this as long as we can tell the cards apart it is all good)

# Example:
# How many players (2-8) ? 3

# Your hand: 2 of Clubs, 5 of Diamonds
# CPU 1 Hand: Ace of Spades, Ace of Hearts
# CPU 2 Hand: King of Clubs, Queen of Clubs

# Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
# Turn: King of Hearts
# River: Jack of Hearts
# Dealing Cards:
# To keep things close to the game you will be dealing from 1 deck of standard playing cards. Once you deal that card you cannot deal it again. The exact method is part of the challenge and for you to decide, design and implement. In Texas Hold em you burn a card (draw and discard without looking at it) before you do the flop, turn and river. It removes these cards from the pool of possible cards that can be dealt. If you wish to show these cards (I did not in my example) then please for science go for it.

# Extension
# In the intermediate you will be asked to compare various hands of poker to find which hand is the winning hand.


require 'pry'


# Ask how many players
puts "How many players (2-8)?"


# Determine valid response
playerNum = gets.chomp.to_i
puts "Setting up for #{playerNum} players"



# First define a card
class Card
  attr_accessor :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def announce_card
    # return 'Q of Clubs'
    puts "#{@rank} of #{@suit}"
  end

end


# Now make a deck of cards
class Deck

  def initialize 
    # initialize all ranks and suits
    # @ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    @ranks = [*(2..10),'J', 'Q', 'K', 'A'],
    @suits = ['♤', '♡', '♧', '♢'],
    @cards = []
    # Loop through each rank and suit to make new cards
    @ranks.each do |rank|
      @suits.each do |suit|
        # Push each new card to empty cards array
        @cards << Card.new(rank, suit)
      end
    end
  end

  def shuffle_cards
    @cards.shuffle!
    puts "Cards have been shuffled"
  end

  def deal(number)
    puts "#{number} cards have been dealt"
    number.times {@cards.shift.announce_card}
  end

  def show_cards
    @cards.each do |card|
      p card
    end
  end

end


deck = Deck.new
deck.deal(7)

# Shuffle deck of cards



# Deal each player 2x cards (hole cards) and remove from deck



# Show first 3 community cards (The flop)



# Show 4th community card (The turn)



# Show final community card (The River)



# betting options - Check, call, raise or fold.


binding.pry
# SEI Wk 7 - Wed - Warmup - Dave

# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.

# Scrabble.score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb.

# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10


require 'pry'

class Scrabble
  def self.score(word)
    letterValues = {
      a: 1,
      b: 3,
      c: 3,
      d: 2,
      e: 1,
      f: 4,
      g: 2,
      h: 4,
      i: 1,
      j: 8,
      k: 5,
      l: 1,
      m: 3,
      n: 1,
      o: 1,
      p: 3,
      q: 10,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 4,
      w: 4,
      x: 8,
      y: 4,
      z: 10
    }
    totalScore = 0
    word.downcase.chars.each do |char|
      totalScore += letterValues[char.to_sym]
    end
    totalScore 
  end
end

puts "Total Score: "
p Scrabble.score("cabbage")

# take word and break into chars
# find value of each char
# add value of char to total score
# loop through remaining chars
# return total score

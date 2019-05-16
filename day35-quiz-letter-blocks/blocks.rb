require 'pry'

def can_make_word(input)
  # 19x two-sided blocks
  blocks = [
    ['B','O'],
    ['X','K'],
    ['D','Q'],
    ['C','P'],
    ['N','A'],
    ['G','T'],
    ['R','E'],
    ['T','G'],
    ['Q','D'],
    ['F','S'],
    ['J','W'],
    ['H','U'],
    ['V','I'],
    ['A','N'],
    ['E','R'],
    ['F','S'],
    ['L','Y'],
    ['P','C'],
    ['Z','M']
  ]

  # For each letter of input, search block array.
  # If letter found in first position, return true and remove array
  # if not found in first position search second
  # if found then return true and remove array

  results = ''

  # input.chars.each do |letter|
  #   puts "--- SEARCHING FOR LETTER #{letter} ---"
  #   blocks.each do |block|
  #     puts "Checking block: #{block}"
  #     if block.include? letter
  #       puts "Found '#{letter}' in block #{blocks.index(block)} (#{block}). Discarding block"
  #       blocks.delete_at(blocks.index(block))
  #       results << letter
  #       break
  #     end
  #   end
  # end

  input.chars.each do |char|
    blocks.each do |block|
      if block.include? char
        blocks.delete_at blocks.index(block)
        results << char
        break
      end
    end
  end

  return input == results # evaluates to true or false

end

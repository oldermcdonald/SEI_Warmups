# SEI Warmup Wk8 Thurs - Dave

# Quiz Letter blocks
# Language: Javascript or Ruby
# You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are 19 blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:

# [
#   ['B','O'],
#   ['X','K'],
#   ['D','Q'],
#   ['C','P'],
#   ['N','A'],
#   ['G','T'],
#   ['R','E'],
#   ['T','G'],
#   ['Q','D'],
#   ['F','S'],
#   ['J','W'],
#   ['H','U'],
#   ['V','I'],
#   ['A','N'],
#   ['E','R'],
#   ['F','S'],
#   ['L','Y'],
#   ['P','C'],
#   ['Z','M']
# ]
# If you test these words, these results will happen:

# can_make_word("A")
# # => true
# can_make_word("BARK")
# # => true
# can_make_word("BOOK")
# # => false
# can_make_word("TREAT")
# # => true
# can_make_word("COMMON")
# # => false
# can_make_word("SQUAD")
# # => true
# can_make_word("CONFUSE")
# # => true
# can_make_word("BOUGHT")
# # => false
# Write the can_make_word function to output the results above.


require 'minitest/autorun'
require 'minitest/reporters'

require_relative 'blocks'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

class BlocksTest < MiniTest::Unit::TestCase
  def test_A
    assert_equal true, can_make_word("A")
  end

  def test_BARK
    assert_equal true, can_make_word("BARK")
  end

  def test_BOOK
    assert_equal false, can_make_word("BOOK")
  end

  def test_TREAT
    assert_equal true, can_make_word("TREAT")
  end

  def test_COMMON
    assert_equal false, can_make_word("COMMON")
  end

  def test_SQUAD
    assert_equal true, can_make_word("SQUAD")
  end

  def test_CONFUSE
    assert_equal true, can_make_word("CONFUSE")
  end

  def test_BOUGHT
    assert_equal false, can_make_word("BOUGHT")
  end

end
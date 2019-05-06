# Warmup Wk 4 Wednesday

# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

# Hints
# gets, get string is the opposite of puts put string.

# Notice that when you type "Something" and then hit enter, you get the string "Something\n"

# loop do
#   # talk to Daniel here
# end


# Extensions
# l33t sP34k
# Daniel, inspired by the 90s, is bringing back "l33t sP34k", and he'll teach you how to do it. Start any sentence with "Bro, ", and he'll translate the rest of it into l33t sP34k for you.

# In brief:

# Several vowels are always replaced with numbers: a = 4, e = 3, i = 1, o = 0
# Words that start with a consonant start with lower case
# Consonants after the first letter alternate upper and lower case, except the alternation starts over with lowercase after a digit (ex: sCh00l)

def l33t(string)
  new_string = ""
end


def dan_response (string)
  if string.chomp.end_with?("?")
    puts "Sure"
  elsif string.chomp.length < 1
    puts "Fine, be that way"
  elsif string == string.upcase
    puts "Woah, chill out!"
  elsif string.downcase.start_with?("bro")

    # Pseuodocode below
    # First split string into individual words
    # then check each word if first letter is consonant (!= 'u' as remaining vowels are now numbers)
    #   word[0].downcase
    # end
    # alternate_counter = 0
    # for each letter after first alternate between upcase and downcase
    #   reset alternate_counter if character is number
    
    new_string = string.downcase.gsub('a', '4').gsub('e', '3').gsub('i','1').gsub('o','0')
    words = new_string.split

    words.each do |word|
      if word.start_with?('u')
        word[0] = word[0].upcase
        p word
      end
    end


    puts new_string

  else
    puts "Whatever"
  end
  # print "You said to Dan: #{string}"
end


quit = ""
while quit != true
  puts "Ask Dan something...(Or q to quit)"
  user_question = gets
  if user_question.downcase.chomp == "q"
    quit = true
  else
    dan_response (user_question)
  end
end
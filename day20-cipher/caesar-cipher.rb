# SEI Wk5 - Tuesday (Long Weekend) - Dave

# Quiz - Decode this message!
# Write a program to decode this message:

# FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

# This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.

# The alphabet is normally:

# ABCDEFGHIJKLMNOPQRSTUVWXYZ

# The alphabet with the shift parameter of 3 is now as follows:

# DEFGHIJKLMNOPQRSTUVWXYZABC

# Extension:
# Write the program to encode plain text into messages.

# CaesarCipher.encode('TWO SYMBOLS KISSING EACH OTHER')
# Extension 2:
# Write the program to encode it with any shift parameter.

# Send each other secret messages.






require 'pry'

def Caesar_Cipher(message, key)
  alphabet_length = 26

  # Return ascii decimal values
  ascii = message.chars.map do |char|
    p char.ord
  end
  
  # Shift each ascii code by key amount
  shifted = ascii.map do |ascii_code|
    # Check if ascii_code is upper or lowercase letter
    # A-Z = 65-90
    # a-z = 97-122
    if (ascii_code >= 65 && ascii_code <= 90) || (ascii_code >= 97 && ascii_code <= 122)
      p ascii_code + key
    else
      ascii_code
    end
  end

  # Convert ascii back to char with .chr
  cipher = shifted.map do |ascii_code|
    ascii_code.chr
  end
  cipher.join
end




message = "z"
p "Original Message: #{message}"
p "Cipher Message: #{Caesar_Cipher(message, 3)}"


# if ascii_code + key is within the bounds then code + key
# otherwise...
# "z" = 122
# key = 3
# return 99 not 125
# return (122 + 3) - 26






# Extensions
# Account for text wrapping ('A' & 'Z')

# If not these numbers than don't encrypt

# How could we automatically find the key?
# 103 combinations of two-letter words
# Frequency analysis - Find most common letter E
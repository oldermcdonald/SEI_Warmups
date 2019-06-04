# SEI Warmup Wk 10 - Wed

# Cybersec
# The 'penetration testing' team have obtained a file from a suspect's private machine... and the information is incriminating! The only problem is... your tracking software only accepts a particular format. Take the compromised file, and turn it into a format for your backend to process it.

# Text file with incriminating info:
# customer,product,cost per unit,units
# Alica Brereton,Marijuana,9.18,50
# William Kotai,ecstasy,19.12,20
# Joel Forro,heroin,91.16,5
# David Ernest,Methamphetamine,108.78,5
# David Ernest,cocaine,80,2
# Joel Forro,ecstasy,19.12,10
# Gabriella Hyde,Marijuana,9.18,10
# Gabriella Hyde,Methamphetamine,108.78,8
# Sample output of the format we want our data for processing:
# {  
#    'Alica Brereton':[  
#       {  
#          product:'Marijuana',
#          unitPrice:'9.18',
#          units:'50',
#          totalPrice:'459.00'
#       }
#    ],
#    'William Kotai':[  
#       {  
#          product:'ecstasy',
#          unitPrice:'19.12',
#          units:'20',
#          totalPrice:'382.40'
#       }
#    ],
#    'Joel Forro':[  
#       {  
#          product:'heroin',
#          unitPrice:'91.16',
#          units:'5',
#          totalPrice:'455.80'
#       },
#       {  
#          product:'ecstasy',
#          unitPrice:'19.12',
#          units:'10',
#          totalPrice:'191.20'
#       }
#    ],
#    'David Ernest':[  
#       {  
#          product:'Methamphetamine',
#          unitPrice:'108.78',
#          units:'5',
#          totalPrice:'543.90'
#       },
#       {  
#          product:'cocaine',
#          unitPrice:'80',
#          units:'2',
#          totalPrice:'160.00'
#       }
#    ],
#    'Gabriella Hyde':[  
#       {  
#          product:'Marijuana',
#          unitPrice:'9.18',
#          units:'10',
#          totalPrice:'91.80'
#       },
#       {  
#          product:'Methamphetamine',
#          unitPrice:'108.78',
#          units:'8',
#          totalPrice:'870.24'
#       }
#    ]
# }



require 'pry'

# function for reading csv and converting to array
def csv_convert(file)
  data_rows = []
  f = File.open(file, 'r')
  f.each_line do |line|
    data_rows.push line.chomp.split(',')
  end
  f.close
  return data_rows
end

# read file and convert
csv_table = csv_convert('./user-file.txt')

# remove headers from table
csv_headers = csv_table.shift

# empty array for storing formatted data
data = {}

# add names as keys to hash with empty array
csv_table.each do |row|
  data[row[0]] = []
end

# add row information to each name
csv_table.each do |row|
  totalPrice = (row[2].to_f * row[3].to_f).round(2).to_s
  data[row[0]] << {'product': row[1], 'unitPrice': row[2], 'units': row[3], 'totalPrice': totalPrice}
end

puts data

binding.pry
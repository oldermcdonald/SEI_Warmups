def make_fake_map (num_rows, num_cols, char_marker)
  map_output = []
  # Make the rows
  num_rows.times do
    map_output << []
  end
  # Add 'A' to the rows
  map_output.each do |column|
    num_cols.times do
      column << "A"
    end
  end
  # Insert char_marker at random position
  rand_row = rand(num_rows)
  rand_col = rand(num_cols)
  map_output[rand_row][rand_col] = char_marker
  return map_output
end
puts make_fake_map(6,5,'F').inspect
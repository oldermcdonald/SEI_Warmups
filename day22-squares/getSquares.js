console.log('Get the squares!')

var is_perfect_square = function (num) {
  return Math.sqrt(num) % 1 == 0;
}

var get_squares = function(num_array) {
  var perfect_squares = num_array.filter(is_perfect_square);
  perfect_squares.sort(function(a, b){
    return a - b;
  })
  unique_values = [...new Set(perfect_squares)]
  return unique_values
}

console.log(get_squares([3,64,24,9,52,7,43,76,9,22,64]));
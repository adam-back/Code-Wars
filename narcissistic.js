function narcissistic( value ) {
  var exponent = value.toString().length;
  var comparison = 0;

  // split value into numbers
  var numbers = value.toString().split('');

  // loop through numbers
  for (var i = 0; i < numbers.length; i++) {
    // raise each number to the exponent
    // add it to the comparison
    comparison += Math.pow(numbers[i], exponent);
  };

  return comparison === value;
};
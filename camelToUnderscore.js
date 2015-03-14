var toUnderscore = function(camelCase) {
  var output = [];

  // norm the data into a string
  camelCase = camelCase.toString();
  // change first letter to lower case string
  // push to output
  output.push( camelCase[0].toLowerCase() );

  // loop through input
  for ( var i = 1; i < camelCase.length; i++ ) {
    // check if it's upper or lower case
    // if it's uppercase and NaN
    if( camelCase[i].toUpperCase() === camelCase[i] && isNaN( camelCase[i] ) ) {
      // push _ then put lowercase letter
      output.push('_' + camelCase[i].toLowerCase() );
    // else lowercase
    } else {
      output.push( camelCase[i] );
    }

  };
  // return underscored string
  return output.join('');
};
var convertNumberToHex = function(num) {
  var hexDigits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var current = ['0','0'];
  var hexCounter = 0;
  var placeValue = 1;
  for (var i = 0; i <= num; i++) {
    // if number is not at F
    if( hexCounter !== 16 ) {
      // replace it with the next highest
      current.pop();
      current.push( hexDigits[hexCounter] );
      hexCounter++;
      // if number is maxed out at F
    } else {
      // if it's not time to increase place values
      if( current[placeValue - 1] !== 'F' ) {
        hexCounter = 0;
        current[placeValue - 1] = hexDigits[ hexDigits.indexOf( current[placeValue - 1] ) + 1 ];
      } else {
        
      }
    }
  };

  return current.join('');
};

var convertRGB = function(n1, n2, n3) {

};
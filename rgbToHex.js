var convertNumberToHex = function(num) {
  var hexDigits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var current = ['0','0'];
  var hexCounter = 0;
  var placeValue = 1;

  for (var i = 0; i < num; i++) {
    if( hexCounter !== 16 ) {
      current.pop();
      current.push( hexDigits[hexCounter] );
      hexCounter++;
    } else {
      if( current[placeValue - 1] !== 'F' ) {
        hexCounter = 0;
        current[placeValue - 1]++;
      } else {
        
      }
    }
  };

  return current.join('');
};

var convertRGB = function(n1, n2, n3) {

};
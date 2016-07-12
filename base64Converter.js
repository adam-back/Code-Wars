var convertBase64 = function( message ) {
  return window.atob( message );
};

var convertBinaryToText = function( message ) {
  var ascii_string = '';
  var current_byte;
  //split it into bytes
  for ( var i = 0; i < message.length / 8; i++ ) {
    //get the current byte
    current_byte = message.substring( i * 8, ( i * 8 ) + 8 );
    //get the charcode from the current_byte and add it to the ascii_string
    ascii_string += String.fromCharCode( parseInt( current_byte, 2 ) );
  }

  return ascii_string;
};
// console's 0, 1, 2, 3, 4, 5, 6, 7, 8

// solution 1
for( var i = 0; i < 9; i++ ) {
  setTimeout(function( data ) {
    console.log( data );
  }, 0, i );
};

// solution 2
for( var i = 0; i < 9; i++ ) {
  setTimeout(function() {
    console.log( this );
  }.bind( i ), 0 );
};
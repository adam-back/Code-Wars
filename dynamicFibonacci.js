var dynamicFibonacci = function( n ) {
  var tracker = [ 0, 1 ];

  if ( n < 2 ) {
    return n;
  } else {
    for( ; n > 0; n-- ) {
      var sumOfPreviousTwo = tracker[ 0 ] + tracker[ 1 ];
      tracker.shift();
      tracker.push( sumOfPreviousTwo );
    }

    return tracker[ 0 ];
  }
};
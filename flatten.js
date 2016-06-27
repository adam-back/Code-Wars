// Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].
var flatten = function( nestedArray ) {
  nestedArray = JSON.stringify( nestedArray );
  nestedArray = nestedArray.replace( /\[/g, '' );
  nestedArray = nestedArray.replace( /\]/g, '' );
  nestedArray = ''.concat( '[', nestedArray, ']' );
  return JSON.parse( nestedArray );
};
function mineLocation(field) {
  var location = [];
  // Loop through field rows
  for (var rowNumber = 0; rowNumber < field.length; rowNumber++) {
    var row = field[rowNumber];
    // Loop through each row's column
    for (var columnNumber = 0; columnNumber < row.length; columnNumber++) {
      // if the item at that location is a 1
      if( row[columnNumber] === 1 ) {
        // save the row and column info
        location = [rowNumber, columnNumber];
        break;
      }
    };
  };

  // return [row, column]
  return location;
};
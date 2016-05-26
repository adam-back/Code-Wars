var bindConsole = function() {
  for(var i = 0; i < 9; i++) {
    var boundConsole = console.log.bind( null, i );
    setTimeout(boundConsole, 0);
  }

  // console's 0, 1, 2, 3, 4, 5, 6, 7, 8
};

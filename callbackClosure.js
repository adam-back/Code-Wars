var createFunctions = function(n) {
  var callbacks = [];

  debugger;
  for ( var i = 0; i < n; i++) {
    var callback = function(i) {
      return i;
    };

    callbacks.push(callback);
  };
  
  return callbacks;
};
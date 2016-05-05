function undoRedo( object ) {
  object.set = function( key, value ) {

  };

  object.get = function( key ) {
    
  };

  object.del = function( key ) {};

  object.undo = function() {};

  object.redo = function() {};

  return object;
};
function undoRedo( object ) {
  // action, key
  var _undoAction = undefined;
  var _redoAction = undefined;

  object.set = function( key, value ) {
    this[ key ] = value;
    _undoAction = [ 'del', key ];
    _redoAction = undefined;
  };

  object.get = function( key ) {
    return this[ key ];
  };

  object.del = function( key ) {
    _undoAction = [ 'set', key ];
    _redoAction = undefined;
    return delete this[ key ];
  };

  object.undo = function() {
    if ( Array.isArray( _undoAction ) ) {
      // something
    } else {
      throw new Error( 'There is nothing to undo.' );
    }
  };

  object.redo = function() {
    if ( Array.isArray( _redoAction ) ) {
      _redoAction = _undoAction;
    } else {
      throw new Error( 'There is nothing to redo.' );
    }
  };

  return object;
}
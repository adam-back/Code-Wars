function undoRedo( object ) {
  // action, key
  var _undoAction = undefined;
  var _redoAction = undefined;

  object.set = function( key, value ) {
    // if the key already exists
    if ( this.hasOwnProperty( key ) ) {
      _undoAction = [ 'set', key, this[ key ] ];
    } else {
      _undoAction = [ 'del', key ];
    }
    this[ key ] = value;
    _redoAction = undefined;
    return;
  };

  object.get = function( key ) {
    return this[ key ];
  };

  object.del = function( key ) {
    // set, key, value
    _undoAction = [ 'set', key, this[ key ] ];
    _redoAction = undefined;
    return delete this[ key ];
  };

  object.undo = function() {
    if ( Array.isArray( _undoAction ) ) {
      var action= _undoAction[ 0 ];
      var key = _undoAction[ 1 ];

      if ( action === 'del' ) {
        // set, key, value
        _redoAction = [ 'set', key, this[ key ] ];
        delete this[ key ];
        _undoAction = undefined;
        return;

      } else {
        _redoAction = [ 'del', key ];
        this[ key ] = _undoAction[ 2 ];
        _undoAction = undefined;
        return;
      }
    } else {
      throw new Error( 'There is nothing to undo.' );
    }
  };

  object.redo = function() {
    if ( Array.isArray( _redoAction ) ) {
      var action= _redoAction[ 0 ];
      var key = _redoAction[ 1 ];

      if ( action === 'del' ) {
        // set, key, value
        _undoAction = [ 'set', key, this[ key ] ];
        delete this[ key ];
        _undoAction = undefined;
        return;

      } else {
        _undoAction = [ 'del', key ];
        this[ key ] = _redoAction[ 2 ];
        _undoAction = undefined;
        return;
      }
    } else {
      throw new Error( 'There is nothing to redo.' );
    }
  };

  return object;
}
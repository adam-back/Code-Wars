function undoRedo( object ) {
  // action, key
  var _undoAction = undefined;
  var _redoAction = undefined;
  var _previousValues = {};

  // prepopulate with existing keys
  for ( var key in object ) {
    _previousValues[ key ] = object[ key ];
  }

  object.set = function( key, value ) {
    // if the key already exists
    if ( this.hasOwnProperty( key ) ) {
      _undoAction = [ 'set', key ];
      _previousValues[ key ] = this[ key ];
    } else {
      _undoAction = [ 'del', key ];
      _previousValues[ key ] = undefined;
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
    _undoAction = [ 'set', key ];
    _previousValues[ key ] = this[ key ];
    _redoAction = undefined;
    return delete this[ key ];
  };

  object.undo = function() {
    if ( Array.isArray( _undoAction ) ) {
      var action= _undoAction[ 0 ];
      var key = _undoAction[ 1 ];

      if ( action === 'del' ) {
        _redoAction = [ 'set', key ];
        _previousValues[ key ] = this[ key ];
        delete this[ key ];
        _undoAction = undefined;
      } else {
        var oldValue = this[ key ];

        if ( _previousValues[ key ] ) {
          _redoAction = [ 'set', key ];
          this[ key ] = _previousValues[ key ];
          _previousValues[ key ] = oldValue;
          //save for redo
        } else {
          _redoAction = [ 'del', key ];


        }

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
        _undoAction = [ 'set', key ];
        delete this[ key ];
        _undoAction = undefined;
      } else {
        this[ key ] = _previousValues[ key ];
        _undoAction = undefined;
      }

      return;
    } else {
      throw new Error( 'There is nothing to redo.' );
    }
  };

  return object;
}
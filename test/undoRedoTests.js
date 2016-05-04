describe('undoRedo', function() {
  var obj = {
    x: 1,
    y: 2
  };

  var undidObj = undoRedo( obj );

  it('should be defined as a function', function() {
    expect( undoRedo ).to.be.a( 'function' );
  });

  it('should return an object', function() {
    expect( undidObj ).to.be.a( 'object' );
  });

  describe('set', function() {
    it('should have a set method', function() {
      expect( undidObj ).to.have.property( 'set' );
      expect( undidObj.set ).to.be.a( 'function' );
    });
  });

  describe('get', function() {
    it('should have a get method', function() {
      expect( undidObj ).to.have.property( 'get' );
      expect( undidObj.get ).to.be.a( 'function' );
    });
  });

  describe('del', function() {
    it('should have a del (delete) method', function() {
      expect( undidObj ).to.have.property( 'del' );
      expect( undidObj.del ).to.be.a( 'function' );
    });
  });

  describe('undo', function() {
    it('should have a undo method', function() {
      expect( undidObj ).to.have.property( 'undo' );
      expect( undidObj.undo ).to.be.a( 'function' );
    });
  });

  describe('redo', function() {
    it('should have a redo method', function() {
      expect( undidObj ).to.have.property( 'redo' );
      expect( undidObj.redo ).to.be.a( 'function' );
    });
  });
});
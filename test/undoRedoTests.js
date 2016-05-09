describe.only('undoRedo', function() {
  var obj, undidObj;

  beforeEach(function() {
    obj = {
      x: 1,
      y: 2
    };
    undidObj = undoRedo( obj );
  });

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

    it('should add a new key-value pair to the object', function() {
      expect( undidObj ).not.to.have.a.property( 'Adam' );
      undidObj.set( 'Adam', 1 );
      expect( undidObj ).to.have.a.property( 'Adam' );
      expect( undidObj.Adam ).to.equal( 1 );
    });

    it('should assign a new value to an existing key', function() {
      expect( undidObj ).not.to.have.a.property( 'Adam' );
      undidObj.set( 'Adam', 1 );
      expect( undidObj ).to.have.a.property( 'Adam' );
      expect( undidObj.Adam ).to.equal( 1 );
      undidObj.set( 'Adam', 2 );
      expect( undidObj.Adam ).to.equal( 2 );
    });
  });

  describe('get', function() {
    it('should have a get method', function() {
      expect( undidObj ).to.have.property( 'get' );
      expect( undidObj.get ).to.be.a( 'function' );
    });

    it('should return value of given key', function() {
      expect( undidObj.get( 'Adam' ) ).to.equal( undefined );
      undidObj.set( 'Adam', 1 );
      expect( undidObj.get( 'Adam' ) ).to.equal( 1 );
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
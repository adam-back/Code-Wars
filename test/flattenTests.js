describe('Flatten', function() {
  it('should be defined as a function', function() {
    expect( flatten ).to.be.a( 'function' );
  });

  it('should return an array', function() {
    expect( Array.isArray( flatten( [] ) ) ).to.be.true;
  });

  describe('should flatten array to [1,2,3,4]', function() {
    it('for input [[1],2,3,4]', function() {
      var input = [[1],2,3,4];
      var output = flatten( input );
      expect( output ).to.deep.equal( [ 1, 2, 3, 4 ] );
    });

    it('for input [1,[2,3],4]', function() {
      var input = [1,[2,3],4];
      var output = flatten( input );
      expect( output ).to.deep.equal( [ 1, 2, 3, 4 ] );
    });

    it('for input [[1,2,[3]],4]', function() {
      var input = [[1,2,[3]],4];
      var output = flatten( input );
      expect( output ).to.deep.equal( [ 1, 2, 3, 4 ] );
    });

    it('for input [[1,[2,3]],4]', function() {
      var input = [[1,[2,3]],4];
      var output = flatten( input );
      expect( output ).to.deep.equal( [ 1, 2, 3, 4 ] );
    });

    it('for input [[1,2,3,4]]', function() {
      var input = [[1,2,3,4]];
      var output = flatten( input );
      expect( output ).to.deep.equal( [ 1, 2, 3, 4 ] );
    });
  });
});
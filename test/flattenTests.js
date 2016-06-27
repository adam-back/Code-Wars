describe('Flatten', function() {
  it('should be defined as a function', function() {
    expect( flatten ).to.be.a( 'function' );
  });

  it('should return an array', function() {
    expect( Array.isArray( flatten( [] ) ) ).to.be.true;
  });
});
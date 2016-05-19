describe('dynamicFibonacci', function() {
  it('should be defined as a function', function() {
    expect( dynamicFibonacci ).to.be.a( 'function' );
  });

  it('should return 0 for n of 0', function() {
    expect( dynamicFibonacci( 0 ) ).to.equal( 0 );
  });

  it('should return 1 for n of 1', function() {
    expect( dynamicFibonacci( 1 ) ).to.equal( 1 );
  });

  it('should return 1 for n of 2', function() {
    expect( dynamicFibonacci( 2 ) ).to.equal( 1 );
  });

  it('should return 2 for n of 3', function() {
    expect( dynamicFibonacci( 3 ) ).to.equal( 2 );
  });

  it('should return 8 for n of 6', function() {
    expect( dynamicFibonacci( 6 ) ).to.equal( 8 );
  });

  it('should return 144 for n of 12', function() {
    expect( dynamicFibonacci( 12 ) ).to.equal( 144 );
  });
});
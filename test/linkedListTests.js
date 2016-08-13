describe('LinkedList', function() {
  var ll;

  beforeEach(function() {
    ll = new LinkedList();
  });

  it('should be defined as a function', function() {
    expect( LinkedList ).to.be.a( 'function' );
  });

  it('should return an object', function() {
    expect( ll ).to.be.a( 'object' );
  });

  it('should return an object with a head value', function() {
    console.log( ll );
    expect( ll.hasOwnProperty( 'head' ) ).to.be.true;
  });
});
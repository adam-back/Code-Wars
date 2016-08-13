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
    expect( ll.hasOwnProperty( 'head' ) ).to.be.true;
  });

  describe('push method', function() {
    it('should exist on the prototype chain', function() {
      expect( ll ).to.respondTo( 'push' );
    });

    it('should be add head if none exists', function() {
      ll.push( 1 );
      expect( ll.head ).to.deep.equal( { val: 1, next: null } );
    });

    it('should be add node to end of linked list', function() {
      ll.push( 1 );
      ll.push( 5 );
      expect( ll.head ).to.deep.equal( { val: 1, next: { val: 5, next: null } } );
    });
  });
});
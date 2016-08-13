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

  describe('pop method', function() {
    it('should exist on the prototype chain', function() {
      expect( ll ).to.respondTo( 'pop' );
    });

    it('should do nothing if head is not set', function() {
      expect( ll.pop() ).to.be.null;
      expect( ll.head ).to.be.null;
    });

    it('should remove the head if it is the only node', function() {
      ll.push( 1 );
      ll.pop();
      expect( ll.head ).to.be.null;
    });

    it('should return the node it removed', function() {
      ll.push( 1 );
      expect( ll.pop() ).to.deep.equal( { val: 1, next: null } );
    });

    it('should remove last node in the linked list', function() {
      ll.push( 1 );
      ll.push( 2 );
      ll.push( 3 );
      expect( ll.pop() ).to.deep.equal( { val: 3, next: null } );
      expect( ll.head.val ).to.equal( 1 );
      expect( ll.head.next ).to.deep.equal( { val: 2, next: null } );
    });
  });

  describe('reverse method', function() {
    it('should exist on the prototype chain', function() {
      expect( ll ).to.respondTo( 'reverse' );
    });

    it('should do nothing if head is not set', function() {
      var reversed = ll.reverse();
      expect( reversed.head ).to.be.null();
    });

    it('should do nothing if head is only node', function() {
      ll.push( 1 );
      var reversed = ll.reverse();
      expect( reversed.head ).to.deep.equal( { val: 1, next: null } );
    });

    it('should reverse linked list for two elements', function() {
      ll.push( 1 );
      ll.push( 2 );
      var reversed = ll.reverse();
      expect( reversed.head.val ).to.equal( 2 );
      expect( reversed.head.next ).to.deep.equal( { val: 1, next: null } );
    });

    it('should leave the original linked list alone', function() {
      ll.push( 1 );
      ll.push( 2 );
      ll.reverse();
      expect( ll.head.val ).to.equal( 1 );
      expect( ll.head.next ).to.deep.equal( { val: 2, next: null } );
    });

    it('should reverse linked list for three elements', function() {
      ll.push( 1 );
      ll.push( 2 );
      ll.push( 3 );
      var reversed = ll.reverse();
      expect( reversed.head.val ).to.equal( 3 );
      expect( reversed.head.next.val ).to.equal( 2 );
      expect( reversed.head.next.next ).to.deep.equal( { val: 1, next: null } );
    });
  });
});
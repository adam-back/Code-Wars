describe('inheritance', function() {
  describe('Animal Superclass', function() {
    var animal = new Animal( 'mammal' );

    it('should be defined as a function', function() {
      expect( Animal ).to.be.a( 'function' );
    });

    it('should have a type mammal', function() {
      expect( animal.hasOwnProperty( 'type' ) ).to.be.true;
      expect( animal.type ).to.equal( 'mammal' );
    });
  });

  describe('Dog Subclass', function() {
    var Benji = new Dog( 'Shorkie', 'Benji' );

    it('should be defined as a function', function() {
      expect( Dog ).to.be.a( 'function' );
    });

    it('should have a type mammal', function() {
      expect( Benji.hasOwnProperty( 'type' ) ).to.be.true;
      expect( Benji.type ).to.equal( 'mammal' );
    });

    it('should have a breed', function() {
      expect( Benji.hasOwnProperty( 'breed' ) ).to.be.true;
      expect( Benji.breed ).to.equal( 'Shorkie' );
    });

    it('should have a name', function() {
      expect( Benji.hasOwnProperty( 'name' ) ).to.be.true;
      expect( Benji.name ).to.equal( 'Benji' );
    });

    it('should have a bark method which returns sound', function() {
      expect( Benji.hasOwnProperty( 'bark' ) ).to.be.false; // on prototype
      expect( Benji.bark ).to.be.a( 'function' );
      expect( Benji.bark() ).to.equal( 'woof' );
    });

    it('should be an instance of Dog', function() {
      expect( Benji instanceof Dog ).to.be.true;
    });

    it('should be an instance of Animal', function() {
      expect( Benji instanceof Animal ).to.be.true;
    });
  });
});
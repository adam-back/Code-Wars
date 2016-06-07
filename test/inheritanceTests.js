describe.only('inheritance', function() {
  describe('Animal Superclass', function() {
    var animal = new Animal( 'mammal' );

    it('should be defined as a function', function() {
      expect( Animal ).to.be.a( 'function' );
    });

    it('should have a type mammal', function() {
      expect( animal.hasOwnProperty( 'type' ) ).to.be.true;
      expect( animal.type ).to.equal( 'mammal' );
    });

    it('should have a makeNoise method', function() {
      expect( animal.hasOwnProperty( 'makeNoise' ) ).to.be.true;
      expect( animal.makeNoise ).to.be.a( 'function' );
    });

    it('should make a sound', function() {
      expect( animal.makeNoise( 'meow' ) ).to.equal( 'MEOW!' );
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

    it('should have inherit a makeNoise method which returns sound', function() {
      expect( Benji.hasOwnProperty( 'makeNoise' ) ).to.be.true; // on prototype
      expect( Benji.makeNoise ).to.be.a( 'function' );
      expect( Benji.makeNoise( 'woof' ) ).to.equal( 'WOOF!' );
    });

    it('should be an instance of Dog', function() {
      expect( Benji instanceof Dog ).to.be.true;
    });

    it('should be an instance of Animal', function() {
      expect( Benji instanceof Animal ).to.be.true;
    });
  });
});
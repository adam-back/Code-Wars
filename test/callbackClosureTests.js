describe('Callback closure', function() {
  it('should be a function', function() {
    expect(createFunctions).to.be.a('function');
  });

  it('should return an array', function() {
    expect(Array.isArray(createFunctions(3))).to.be.true;
  });

  it('should have three functions', function() {
    expect(createFunctions(3).length).to.equal(3);
  });

  it('should have five functions', function() {
    expect(createFunctions(5).length).to.equal(5);
  });

  it('should have functions within the array', function() {
    var callbacks = createFunctions(4);
    
    for (var i = 0; i < callbacks.length; i++) {
      expect(callbacks[i]).to.be.a('function');
    };
  });

  it('should return correct number', function() {
    var callbacks = createFunctions(5);

    for (var i=0; i<callbacks.length; i++) {
      expect( callbacks[i]() ).to.equal(i);
    }
  });

  it('should work for a larger (up to 50), random number of functions', function() {
    var callbacks = createFunctions( Math.floor( Math.random() * 50 ) );
    
    for (var i=0; i<callbacks.length; i++) {
      expect( callbacks[i]() ).to.equal(i);
    }

  });
});
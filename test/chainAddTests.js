describe.only('Chaining add', function() {
  it('should be a function', function() {
    expect(add).to.be.a('function');
  });

  it('should add one number to eqaul 2', function() {
    expect(add(2)).to.equal(2);
  });

  it('should add two numbers to equal 5', function() {
    expect(add(2)(3)).to.equal(5);
  });

  it('should add three numbers to equal 8', function() {
    expect(add(2)(1)(5)).to.equal(8);
  });
});
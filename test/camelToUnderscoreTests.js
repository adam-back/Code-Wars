describe('toUnderscore', function() {
  it('should be a function', function() {
    expect(toUnderscore).to.be.a('function');
  });

  it('should return a string', function() {
    expect(toUnderscore('ab')).to.be.a('string');
  });

  it('should change TestCase to test_case', function() {
    expect(toUnderscore('TestCase')).to.equal('test_case');
  });

  it('should change App7Time to app7_time', function() {
    expect(toUnderscore('App7Time')).to.equal('app7_time');
  });

  it('should change 1 to \'1\'', function() {
    expect(toUnderscore(1)).to.equal('1');
  });
});
var expect = require('chai').expect;
var narcissistic = require('../narcissistic').narcissistic;

describe.only('Narcissistic', function() {
  it('should defined as a function', function() {
    expect(narcissistic).to.be.a('function');
  });

  it('should return a boolean', function() {
    expect(narcissistic(3)).to.be.a('boolean');
  });

  it('should return true for a narcissistic number like 7', function() {
    expect(narcissistic(7)).to.be.true;
  });

  it('should return false for a non-narcissistic number like 11', function() {
    expect(narcissistic(11)).to.be.false;
  });

  it('should return true for 371', function() {
    expect(narcissistic(371)).to.be.true;
  });

  it('should return true for 153', function() {
    expect(narcissistic(153)).to.be.true;
  });

  it('should return true for 1634', function() {
    // 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
    // 1634 = 1634
    expect(narcissistic(1634)).to.be.true;
  });

  it('should return true for 2320', function() {
    // 2^4 + 3^4 + 2^4 + 0^4 = 16 + 81 + 16 + 0 = 113
    // 2320 !== 113
    expect(narcissistic(2320)).to.be.false;
  });

});
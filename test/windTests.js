var expect = require('chai').expect;
var windComponents = require('../windComponents').windComponents;

describe('windComponents', function() {
  it('should be a function', function() {
    expect(windComponents).to.be.a('function');
  });

  it('should return a string', function() {
    expect(windComponents('31', 14, 153)).to.be.a('string');
  });

  it('should return a message with headwind/left crosswind', function() {
    expect(windComponents("18L",170,15)).to.equal("Headwind 15 knots. Crosswind 3 knots from your left.");
  });

  it('should return a message with headwind/right crosswind', function() {
    expect(windComponents("4C",90, 25)).to.equal("Headwind 15 knots. Crosswind 3 knots from your left.");
  });

  it('should return a message with tailwind/left crosswind', function() {
    expect(windComponents("30R",170,5)).to.equal("Headwind 15 knots. Crosswind 3 knots from your left.");
  });

  it('should return a message with tailwind/right crosswind', function() {
    expect(windComponents("9",195,35)).to.equal("Headwind 15 knots. Crosswind 3 knots from your left.");
  });
});
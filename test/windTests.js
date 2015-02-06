var expect = require('chai').expect;
var windComponents = require('../windComponents').windComponents;
var makeMessage = require('../windComponents').makeMessage;

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

describe('makeMessage', function() {
  it('should be a function', function() {
    expect(makeMessage).to.be.a('function');
  });

  it('should return a string', function() {
    expect(makeMessage('Head', 31, 13, 'left')).to.be.a('string');
  });

  it('should return TW and CW', function() {
    var message = makeMessage('Head', 31, 13, 'left');
    expect(message).to.equal("Headwind 31 knots. Crosswind 13 knots from your left.");
  });
  
  it('should return message for no headwind/tailwind', function() {
    var message = makeMessage('Head', 0, 23, 'right');
    expect(message).to.equal("Head 0 knots. Crosswind 23 knots from your right.");
  });

  it('should return message for no crosswind', function() {
    var message = makeMessage('Head', 23, 0, 'right');
    expect(message).to.equal("Headwind 23 knots. Crosswind 0 knots from your right.");
  });
});
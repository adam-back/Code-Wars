var expect = require('chai').expect;
var decodeMorse = require('../morseCodeDecoder').decodeMorse;

describe('Morse code', function() {
  it('should be a function', function() {
    expect(decodeMorse).to.be.a('function');
  });
});
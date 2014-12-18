var expect = require('chai').expect;

describe('Truth', function() {
  it('should be true', function() {
    expect(true).to.be.a('boolean');
  });
});
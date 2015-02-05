var expect = require('chai').expect;
var mineLocation = require('../mineLocation').mineLocation;
var location;

describe.only('mineLocation', function() {
  it('should be a function', function() {
    expect(mineLocation).to.be.a('function');
  });

  it('should return an array', function() {
    location = mineLocation([ [1, 0], [0, 0] ]); 
    expect( Array.isArray(location) ).to.be.true;
  });

  it('should return a tuple for the location of a mine', function() {
    location = mineLocation([ [1, 0], [0, 0] ]); 
    expect(location.length).to.equal(2);
  });

  it('should return the location for a mine in a 2x2 field', function() {
    location = mineLocation([ [1, 0], 
                              [0, 0] ]); 

    expect(location).to.equal([0,0]);
  });

  it('should return the location for a mine in a 3x3 field', function() {
    location = mineLocation([ [0, 0, 0], 
                              [0, 1, 0], 
                              [0, 0, 0] ]); 

    expect(location).to.equal([1,1]);
  });

  it('should return the location for a mine in a 4x4 field', function() {
    location = mineLocation([ [0, 0, 0, 0], 
                              [0, 0, 0, 0], 
                              [0, 1, 0, 0], 
                              [0, 0, 0, 0] ]); 

    expect(location).to.equal([1,2]);
  });

});
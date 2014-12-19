var expect = require('chai').expect;

/* Code to be tested */

var once = function(func) {
  if(typeof func === 'function') {
    Object.create()






  } else {
    return null;
  }

};



/* */

describe('Once', function() {
  it('should be a function', function() {
    expect(once).to.be.a('function');
  });

  it('should return a function', function() {
    expect(typeof once(function(){void(0);}) ).to.be.a('function');
  });

  it('should return null if a function is not passed as a parameter', function() {
    expect(once('string')).to.be(null);
    expect(once(true)).to.be(null);
    expect(once(9)).to.be(null);
    expect(once(9)).to.be(null);
  });

  describe('should limit the number of times a function is run', function() {
    var byTwo = function(n) {
      return n * 2;
    };

    var multiply;

    beforeEach(function() {
      multiply = once(byTwo);
    });
    
    it('should return 4 (run once)', function() {
      expect(multiply(2)).to.be(4);
    });

    it('should return undefined (run twice)', function() {
      expect(multiply(3)).to.be(6);
      expect(multiply(4)).to.be(undefined);
    });
  });

});
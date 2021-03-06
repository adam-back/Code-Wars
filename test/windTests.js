describe('Airplane landing wind:', function() {
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
      expect(windComponents("04C",90, 25)).to.equal("Headwind 16 knots. Crosswind 19 knots from your right.");
    });

    it('should return a message with tailwind/left crosswind', function() {
      expect(windComponents("30R",170,5)).to.equal("Tailwind 3 knots. Crosswind 4 knots from your left.");
    });

    it('should return a message with tailwind/right crosswind', function() {
      expect(windComponents("09",195,35)).to.equal("Tailwind 9 knots. Crosswind 34 knots from your right.");
    });

    it('should return a message with head, but no crosswind', function() {
      expect(windComponents("26C", 255, 5)).to.equal("Headwind 5 knots. Crosswind 0 knots from your right.");
    });

    it('should return a message with no head or tailwind, but a right crosswind', function() {
      expect(windComponents("18L", 270, 5)).to.equal("Headwind 0 knots. Crosswind 5 knots from your right.");
    });

    it('should return a message with no winds', function() {
      expect(windComponents("07", 23, 0)).to.equal("Headwind 0 knots. Crosswind 0 knots from your right.");
    });

    it('should have T1, 4R', function() {
      expect(windComponents('21', 312, 4)).to.equal("Tailwind 1 knots. Crosswind 4 knots from your right.");
    });

    it('should have H22, 28L', function() {
      expect(windComponents('08', 28, 35)).to.equal("Headwind 22 knots. Crosswind 28 knots from your left.");
    });

    it('should have T25, 16L', function() {
      expect(windComponents('08', 292, 30)).to.equal("Tailwind 25 knots. Crosswind 16 knots from your left.");
    });

    it('should have H0, 1L', function() {
      expect(windComponents('29', 174, 1)).to.equal("Headwind 0 knots. Crosswind 1 knots from your left.");
    });

    it('should have H1, 17L', function() {
      expect(windComponents('02', 294, 17)).to.equal("Headwind 1 knots. Crosswind 17 knots from your left.");
    });

    it('should have H0, 1R', function() {
      expect(windComponents('06', 127, 1)).to.equal("Headwind 0 knots. Crosswind 1 knots from your right.");
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
      expect(message).to.equal("Headwind 0 knots. Crosswind 23 knots from your right.");
    });

    it('should return message for no crosswind', function() {
      var message = makeMessage('Head', 23, 0, 'right');
      expect(message).to.equal("Headwind 23 knots. Crosswind 0 knots from your right.");
    });
  });
});
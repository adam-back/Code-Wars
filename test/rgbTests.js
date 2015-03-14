describe.only('Convert RGB to Hexadecimal', function() {
  describe('Convert one number', function() {
    it('should be a function', function() {
      expect(convertNumberToHex).to.be.a('function');
    });

    it('should return a string', function() {
      expect(typeof convertNumberToHex(21)).to.be.a('string');
    });

    it('should be two digits long', function() {
      expect(convertNumberToHex(12).length).to.equal(2);
    });

    it('should convert 0 to \'00\'', function() {
      expect(convertNumberToHex(0)).to.equal('00');
    });

    it('should 9 convert to \'09\'', function() {
      expect(convertNumberToHex(9)).to.equal('09');
    });

    it('should convert 10 to be \'0A\'', function() {
      expect(convertNumberToHex(10)).to.equal('0A');
    });

    it('should convert 15 to be \'0F\'', function() {
      expect(convertNumberToHex(15)).to.equal('0F');
    });

    it('should convert 16 to be \'10\'', function() {
      expect(convertNumberToHex(16)).to.equal('10');
    });
  });

  describe('Convert whole RGB', function() {
    it('should be a function', function() {
      expect(convertRGB).to.be.a('function');
    });
  });
});
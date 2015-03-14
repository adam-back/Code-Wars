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

    it('should convert 255 to be \'FF\'', function() {
      expect(convertNumberToHex(255)).to.equal('FF');
    });

    it('should convert 300 to be \'FF\'', function() {
      expect(convertNumberToHex(300)).to.equal('FF');
    });

    it('should convert 148 to be \'94\'', function() {
      expect(convertNumberToHex(148)).to.equal('94');
    });

    it('should convert 211 to be \'D3\'', function() {
      expect(convertNumberToHex(211)).to.equal('D3');
    });
  });

  describe('Convert whole RGB', function() {
    it('should be a function', function() {
      expect(rgb).to.be.a('function');
    });
  });
});
describe.only('Convert RGB to Hexadecimal', function() {
  describe('Convert one number', function() {
    it('should be a function', function() {
      expect(convertNumberToHex).to.be.a('function');
    });
  });

  describe('Convert whole RGB', function() {
    it('should be a function', function() {
      expect(convertRGB).to.be.a('function');
    });
  });
});
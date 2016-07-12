describe('Base 64 Converter', function() {
  describe('convertBase64', function() {
    var sixtyFour = 'MDExMDExMTEwMTExMDAwMDAxMTAwMTAxMDExMDExMTAw MDEwMDAwMDAxMTEwMDExMDExMDAxMDEwMTExMDAxMTAx MTAwMDAxMDExMDExMDEwMTEwMDEwMQ==';

    it('should be defined as a function', function() {
      expect( convertBase64 ).to.be.a( 'function' );
    });

    it('should return a string', function() {
      expect( convertBase64( sixtyFour ) ).to.be.a( 'string' );
    });

    it('should convert base64', function() {
      expect( convertBase64( sixtyFour ) ).to.equal( '0110111101110000011001010110111000100000011100110110010101110011011000010110110101100101' );
    });
  });

  describe('convertBinaryToText', function() {
    var binary = '0110111101110000011001010110111000100000011100110110010101110011011000010110110101100101';

    it('should be defined as a function', function() {
      expect( convertBinaryToText ).to.be.a( 'function' );
    });

    it('should return a string', function() {
      expect( convertBinaryToText( binary ) ).to.be.a( 'string' );
    });

    it('should convert base64', function() {
      expect( convertBinaryToText( binary ) ).to.equal( 'open sesame' );
    });
  });
});
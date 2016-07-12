describe.only('Base 64 Converter', function() {

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
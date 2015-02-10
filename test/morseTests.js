describe('Morse code', function() {
  it('should be a function', function() {
    expect(decodeMorse).to.be.a('function');
  });

  it('should return a string', function() {
    expect(decodeMorse('test')).to.be.a('string');
  });

  it('should translate a word', function() {
    expect(decodeMorse('.- -.. .- --')).to.equal('ADAM');
  });

  it('should translate a sentence', function() {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).to.equal('HEY JUDE');
  });

  it('should remove spaces from before a word', function() {
    expect(decodeMorse('   .- -.. .- --')).to.equal('ADAM');
  });

  it('should remove spaces from after a word', function() {
    expect(decodeMorse('.- -.. .- --     ')).to.equal('ADAM');
  });

  it('should remove spaces from before and after a word', function() {
    expect(decodeMorse('   .- -.. .- --  ')).to.equal('ADAM');
  });

  it('should recognize SOS alone', function() {
    expect(decodeMorse('...---...')).to.equal('SOS');
  });

  it('should recognize SOS in a sentence', function() {
    expect(decodeMorse('.... . .-.. .--.   ...---... -.-.--')).to.equal('HELP SOS!');
  });
});
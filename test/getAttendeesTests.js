describe('Santa Party, getAttendees', function() {
  var people = ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 
                'Jack Frost', 'Cupid', 'Father Time'];
  
  var responses = [ 
       {name: 'Easter Bunny', response: 'declined'}, 
       {name: 'Jack Frost', response: 'declined'}, 
       {name: 'Tooth Fairy', response: 'accepted'} 
     ];

  it('should be a function', function() {
    expect(getAttendees).to.be.a('function');
  });

  it('should return an array', function() {
    expect( Array.isArray( getAttendees( people, responses ) ) ).to.be.true;
  });

  it('should have attendees', function() {
    expect( getAttendees( people, responses ) ).to.be("['Tooth Fairy', 'Frosty the Snowman', 'Cupid', 'Father Time']");
  });

  it('should return an empty array if no one is coming', function() {
    responses = [ 
       {name: 'Easter Bunny', response: 'declined'}, 
       {name: 'Jack Frost', response: 'declined'}, 
       {name: 'Tooth Fairy', response: 'declined'}, 
       {name: 'Frosty the Snowman', response: 'declined'}, 
       {name: 'Cupid', response: 'declined'}, 
       {name: 'Father Time', response: 'declined'}, 
     ];
    expect( getAttendees( people, responses ).toString() ).to.equal('[]');
  });
});
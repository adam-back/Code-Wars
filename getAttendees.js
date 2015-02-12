var getAttendees = function(peopleInvited, responses) {
  var coming = [];
  var notComing = {};

  // loop through responses
  for (var i = 0; i < responses.length; i++) {
    if( responses[i]['response'] === 'declined' ) {
    // add to not coming
      notComing[ responses[i]['name'] ] = true;
    }
  };

  // loop through people
  for (i = 0; i < peopleInvited.length; i++) {
    // if not in notComing
    if( notComing[ peopleInvited[i] ] === undefined) {
      coming.push( peopleInvited[i] );
    }
  };

  return coming;
};

// O(n) time (times 2 for the two for loops)
// Animal Superclass
var Animal = function( type ) {
  return {
  // Type: mammal, fish, bird
    type: type
  };
};

// Dog Subclass
var Dog = function( breed, name ) {
  return {
    breed: breed,
    name: name,
    bark: function() {
      return 'woof';
    }
  };
};
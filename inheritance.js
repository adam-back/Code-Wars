// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
// great source

// Animal Superclass
var Animal = function( type ) {
  // Type: mammal, fish, bird
  this.type = type;
  this.makeNoise = function( noise ) {
    return noise.toUpperCase() + '!';
  };
};

// Dog Subclass
var Dog = function( breed, name ) {
  Animal.call( this, 'mammal' );
  this.breed = breed;
  this.name = name;
};

Dog.prototype = Object.create( Animal.prototype );
Dog.prototype.constructor = Dog;
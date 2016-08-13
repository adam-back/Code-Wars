var LinkedList = function() {
  this.head = null;
};

LinkedList.prototype.push = function( val ) {
  var newNode = {
    val: val,
    next: null
  };

  if ( this.head ) {
    var currentNode = this.head;

    while( currentNode.next ) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  } else {
    this.head = newNode;
  }

  return this;
};

LinkedList.prototype.reverse = function() {
  var nodes = [];

  // get all nodes
  var currentNode = this.head;

  while( currentNode.next ) {
    nodes.push( currentNode );
    currentNode = currentNode.next;
  }

  nodes.push( currentNode );

  var newList = new LinkedList();

  while( nodes.length > 0 ) {
    var node = nodes.pop();
    newList.push( node.val );
  }

  return newList;
};
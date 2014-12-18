var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2

// create a new queue
var queue = new Queue();

// enqueue an item
queue.enqueue('item');

// dequeue an item
var item = queue.dequeue();

//The peek function can be used to inspect the item at the front of the queue without dequeuing it:
// get the item at the front of the queue
var item = queue.peek();

// Both the dequeue and peek functions return the value ‘undefined’ if the queue is empty. 
// The getLength and isEmpty functions can be used to determine the the current state of the queue:
// determine the number of items in the queue
var length = queue.getLength();

// determine whether the queue is empty
var isEmpty = queue.isEmpty();


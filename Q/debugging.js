/**
   * inspecting objects using console.log()
   */
   
var foo = {bar: 'foobar'};
console.log(foo);

/* Or you can use its sprintf()-like capabilities to format your debug output: */

var foo = {bar: 'foobar'};
console.log('Hello %s, this is my object: %j', 'World', foo);

/* Instead of console.log() you can use breakpoints & the node's built-in debugger 
You can invoke the debugger by simply calling:
$ node debug my_file.js
*/


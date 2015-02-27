/* 
var stores a value in a variable
but object variable stores a reference to the object
*/
var a=10;
var a={x:20,y:10};
var b=a;
b.y=20;
alert(a.y);

/* simple node
data structure that can be linked to another data structure
has two fields that store the data held in the node and a reference to the next node in the list
*/
var node2={ 
 data:null, 
 next:null
};
node2.data="data2"; 
node1.next=node2;
// You can traverse the list starting from the first node by simply following the "next" properties
node1.next.data

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

/* List object can be used to store and retrieve information from a linked list
onstructor function List(){} can be provided with a makeNode method: */
List.makeNode=function(){ 
 return {data:null,next:null};
};

/* Properties to record the start and end of the list */
this.start=null; 
this.end=null;

// adding instance function using the static makeNode function, setting the start, end and next references 
this.add=function (data){
 if(this.start===null){ 
   this.start=List.makeNode(); 
   this.end=this.start;
 }
 
// adding the new node to the end of the list and updating end and the next property of the previous end node:
 else{ 
  this.end.next=List.makeNode(); 
  this.end=this.end.next; 
 };

// setting the data in the new node:
this.end.data=data; 
};
Using the add method we can create a linked list with as many nodes as we care to use. For example:
var list=new List(); 
for(var i=1;i<=10;i++){ 
 list.add(i);
};
/* this creates a list with ten nodes containing data 1 to 10 */

// traversing the list from start to end
var current = this.start;
while (current !== null) {
 do something which the current node
 current = current.next; 
}

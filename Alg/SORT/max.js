for(var s=0;s<no_slots;s++)//finding maximum value of slots array
        {    
             if(s == 0)
             { 
              var slots_max = slots[s];
             }
             else
             {
                    if(slots[s] > slots_max)
                    {
                      slots_max = slots[s];
                    }
             }              
        }  

/*
This could be also done with Math.max (Math.min)
*/
var max = Math.max.apply(null, arr);
 
 // or
 
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

// For big arrays (~10⁷ elements), Math.min and Math.max procuces a RangeError: Maximum call stack size exceeded in node.js.
Array.prototype.max = function () {
  return this.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

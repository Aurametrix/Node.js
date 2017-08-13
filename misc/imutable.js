var array = Immutable(["totally", "immutable", {hammer: "Can’t Touch This"}]);

array[1] = "I'm going to mutate you!"
array[1] // "immutable"

array[2].hammer = "hm, surely I can mutate this nested object..."
array[2].hammer // "Can’t Touch This"

for (var index in array) { console.log(array[index]); }
// "totally"
// "immutable"
// { hammer: 'Can’t Touch This' }

JSON.stringify(array) // '["totally","immutable",{"hammer":"Can’t Touch This"}]'

model.load({
    type: "tfjs",
    url: './lenetModel/mnist.json'
});
model.init(function(){
    console.log("Hello World from TensorSpace!");
});

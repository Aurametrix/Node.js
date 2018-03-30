import * as tf from ‘@tensorflow/tfjs’;
const model = tf.sequential();
model.add(tf.layers.dense({inputShape: [4], units: 100}));
model.add(tf.layers.dense({units: 4}));
model.compile({loss: ‘categoricalCrossentropy’, optimizer: ‘sgd’});


await model.fit(
  xData, yData, {
    batchSize: batchSize,
    epochs: epochs
});

// Get measurements for a new flower to generate a prediction
// The first argument is the data, and the second is the shape.
const inputData = tf.tensor2d([[4.8, 3.0, 1.4, 0.1]], [1, 4]);

// Get the highest confidence prediction from our model
const result = model.predict(inputData);
const winner = irisClasses[result.argMax().dataSync()[0]];

// Display the winner
console.log(winner);

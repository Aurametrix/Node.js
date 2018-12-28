import { DATA } from './dataset';
import { getAccuracy } from './getAccuracy';

const SPLIT = 99;
const trainData = DATA.slice(0, SPLIT);
const testData = DATA.slice(SPLIT + 1);

// https://github.com/BrainJS/brain.js
//create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork({
  activation: 'sigmoid', // activation function
  hiddenLayers: [2],
  iterations: 20000,
  learningRate: 0.5 // global learning rate, useful when training using streams
});

net.train(trainData);

const accuracy = getAccuracy(net, testData);
console.log('accuracy: ', accuracy);


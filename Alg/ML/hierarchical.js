var cluster = require('hierarchical-clustering');
var colors = [
  [20, 20, 80],
  [22, 22, 90],
  [250, 255, 253],
  [100, 54, 255]
];
 
// Euclidean distance 
function distance(a, b) {
  var d = 0;
  for (var i = 0; i < a.length; i++) {
    d += Math.pow(a[i] - b[i], 2);
  }
  return Math.sqrt(d);
}
 
// Single-linkage clustering 
function linkage(distances) {
  return Math.min.apply(null, distances);
}
 
var levels = cluster({
  input: colors,
  distance: distance,
  linkage: linkage,
  minClusters: 2, // only want two clusters 
});
 
var clusters = levels[levels.length - 1].clusters;
console.log(clusters);
// => [ [ 2 ], [ 3, 1, 0 ] ] 
clusters = clusters.map(function (cluster) {
  return cluster.map(function (index) {
    return colors[index];
  });
});
console.log(clusters);
// => [ [ [ 250, 255, 253 ] ], 
// => [ [ 100, 54, 255 ], [ 22, 22, 90 ], [ 20, 20, 80 ] ] ] 
API
var cluster = require('hierarchical-clustering')
var levels = cluster(options)
Options:

.input <Array> (required) - input array
.distance <Function> (required) - distance function
.linkage <Function> (required) - linkage function or string of 'single', 'complete or 'average'
.minClusters <Integer> (1) - number of clusters you want to iterate to
.maxLinkage <Integer> (Infinity) - maximum linkage until you stop iteration
Function definitions:

function distance(a, b) {
  // the smaller, the closer 
  return <Number>
}
 
function linkage(distances) {
  // the smaller, the more similar 
  return <Number>
}

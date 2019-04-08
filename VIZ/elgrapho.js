let graph = new ElGrapho({
  container: document.getElementById('container'),
  model: {
    nodes: [
      {x: 0,    y: 0.6,  group: 0, label: 0},
      {x: -0.4, y: 0,    group: 1, label: 1},
      {x: 0.4,  y: 0,    group: 1, label: 2},
      {x: -0.6, y: -0.6, group: 2, label: 3},
      {x: -0.2, y: -0.6, group: 2, label: 4},
      {x: 0.2,  y: -0.6, group: 2, label: 5},
      {x: 0.6,  y: -0.6, group: 2, label: 6}
    ],
    edges: [
      {from: 0, to: 1},
      {from: 0, to: 2},
      {from: 1, to: 3},
      {from: 1, to: 4},
      {from: 2, to: 5},
      {from: 2, to: 6}
    ],
    width: 500,
    height: 500
  }
});

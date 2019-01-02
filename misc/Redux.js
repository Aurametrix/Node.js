const initialState = {sum: 0, history: []};
function reduce(state: any, action: any) {
  return {
    sum: state.sum + action.n,
    history: [...state.history, action.name]
  };
}
const action1 = {
  name: 'action1',
  n: 1
};
const action2 = {
  name: 'action2',
  n: 2
};
const list = [action1, action2];
const finalState = Array.prototype.reduce.call(
  list, 
  reduce,
  initialState
);
console.log(finalState); // {sum: 3, history: ['action1', 'action2']}

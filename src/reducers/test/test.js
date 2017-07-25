import { combineReducers } from 'redux';

function test(state = 0, action) {
  console.log(action.type);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const todoTest = combineReducers({
  test,
});

export default todoTest;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from '../components/test';
import counter from '../reducers/test/test';

const store = createStore(counter);
const rootEl = document.getElementById('test');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
);

render();
store.subscribe(render)
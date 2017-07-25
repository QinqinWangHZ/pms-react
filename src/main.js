import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';

import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import './stylesheet/index.scss';
// store设置
import configure from './store';
import myhistory from './history';
// 路由
import routers from './routers';

const store = configure();
const history = syncHistoryWithStore(myhistory, store);
history.listen((location) => { return location; });


// store.dispatch({
//   type:'FETCH_USER',
// });

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      { routers }
    </Router>
  </Provider>,
  document.getElementById('app')
);

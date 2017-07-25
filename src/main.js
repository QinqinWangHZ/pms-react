import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import './stylesheet/index.scss';
// 路由
import routers from './routers';


// store设置
import configure from './store';
import myhistory from './history';
const store = configure();
const history = syncHistoryWithStore(myhistory, store);
history.listen((location) => { return location; });


// store.dispatch({
//   type:'FETCH_USER',
// });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { routers }
    </Router>
  </Provider>,
  document.getElementById('app')
);

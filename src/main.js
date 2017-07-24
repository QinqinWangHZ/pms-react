import './stylesheet/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// store设置
import configure from './store';
const store = configure()
import myhistory from './history'
const history = syncHistoryWithStore(myhistory, store)
history.listen(function (location) { return location })

// 路由
import routers from './routers';


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

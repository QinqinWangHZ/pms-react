import './stylesheet/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';
import routers from './routers';

store.dispatch({
    type:'FETCH_USER',
});

ReactDOM.render(
	<Provider store={store}>
		{ routers }
	</Provider>,
	document.getElementById('app')
);

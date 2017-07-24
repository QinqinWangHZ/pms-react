import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Home from './containers/home.js';

// 按需加载
const TestCenter = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/list.js').default)
    },'repos')
}

const routes = (
    <Route path="/" component={Home}>
      <Route path="repos" getComponent={TestCenter}/>
    </Route>
)

export default routes;

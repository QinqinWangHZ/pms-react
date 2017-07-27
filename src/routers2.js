/*eslint-disable */
import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory, IndexRedirect } from 'react-router';
import App from './containers/App/index.js';
import Welcome from './containers/Welcome/index.js';
import Dashboard from './containers/Dashboard/index.js';
import Nav1 from './containers/Nav1/index.js';
import Nav2 from './containers/Nav2/index.js';
import Nav2_Order from './containers/Nav2/subpage/Order/index.js';
import NotFound from './containers/NotFound/index.js';

const routes = (
    <Route path="/" component={App}>
      <IndexRedirect to="welcome"/>
      <Route path="welcome" component={Welcome}/>
      <Route path="dashboard" component={Dashboard}>
        <IndexRedirect to="nav1"/>
        <Route path="nav2" component={Nav2}>
            <IndexRedirect to="nav2_order"/>
            <Route path="nav2_order" component={Nav2_Order} />
        </Route>
        <Route path="nav1" component={Nav1} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
)

export default routes;

/*eslint-disable */
import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Home from './containers/home.js';

// 按需加载
const TestCenter = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/list.js').default)
    },'repos')
}

// 登录
const login = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/login.js').default)
    },'login')
}

// 图表
const PieReact = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/echartsTest.js').default)
    },'echartsTest')
}

// 测试
const test = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/test.js').default)
    },'test')
}

// 日期
const date = (location, cb) => {
    require.ensure([], require => {
      cb(null, require('./containers/date.js').default)
    },'date')
}

const routes = (
    <Route path="/" component={Home}>
      <Route path="repos" getComponent={TestCenter}/>
      <Route path="login" getComponent={login}/>
      <Route path="PieReact" getComponent={PieReact}/>
      <Route path="test" getComponent={test}/>
      <Route path="date" getComponent={date}/>
    </Route>
)

export default routes;

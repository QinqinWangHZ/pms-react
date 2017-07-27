/*eslint-disable */
import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory, IndexRedirect } from 'react-router';
import Home from './containers/home.js';
import App from './components/App';
import Page from './containers/Page';

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
  <Route path="/" component={App}>
    <IndexRedirect to="signin"/>
    <Route path="signin"
      breadcrumbName="登陆"
      getComponent={(nextState, cb) => {
       require.ensure([], require => {
         cb(null, require('./containers/login/sigin').default)
       }, 'signin')
      }}
    />
    <Route path="signup"
      breadcrumbName="注册"
      getComponent={(nextState, cb) => {
       require.ensure([], require => {
         cb(null, require('./containers/login/register').default)
       }, 'signup')
      }}
    />
    <Route path="forget"
      breadcrumbName="忘记密码"
      getComponent={(nextState, cb) => {
       require.ensure([], require => {
         cb(null, require('./containers/login/forget').default)
       }, 'forget')
      }}
    />
    <Route path="page" breadcrumbName="PMS" component={Page}>
      <IndexRedirect to="order"/>
      <Route path="order" breadcrumbName="本地订单">
        <IndexRedirect to="overview"/>
        <Redirect from="overview" to="overview/1"/>
        <Route path="overview/:page"
               breadcrumbName="待分房"
               getComponent={(nextState, cb) => {
                 require.ensure([], require => {
                   cb(null, require('./containers/OrderPage').default)
                 }, 'mediaOverview')
               }}
        />
        <Route path="edit/:id"
               breadcrumbName="今日到店"
               getComponent={(nextState, cb) => {
                 require.ensure([], require => {
                   cb(null, require('./containers/NowPage').default)
                 }, 'mediaEdit')
               }}
        />Î
        <Route path="new"
               breadcrumbName="新建"
               getComponent={(nextState, cb) => {
                 require.ensure([], require => {
                   cb(null, require('./containers/NewPage').default)
                 }, 'mediaNew')
               }}
        />Î
      </Route>
    </Route>
    <Route path="date" getComponent={date}/>
    <Route path="repos" getComponent={TestCenter}/>
    <Route path="login" getComponent={login}/>
    <Route path="PieReact" getComponent={PieReact}/>
    <Route path="test" getComponent={test}/>
  </Route>
    // <Route path="/" component={Home}>
    //   <Route path="repos" getComponent={TestCenter}/>
    //   <Route path="login" getComponent={login}/>
    //   <Route path="PieReact" getComponent={PieReact}/>
    //   <Route path="test" getComponent={test}/>
    //   <Route path="date" getComponent={date}/>
    // </Route>
)

export default routes;

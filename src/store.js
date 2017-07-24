import Config from './config/config.js';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';
import { createStore, applyMiddleware } from 'redux';

// 异步action中间件
const middleware = [ thunk ];

// 判断环境是否是开发环境
const node_env = process.env.NODE_ENV;
if(node_env === 'dev') {
	middleware.push(createLogger());
}

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

export default (store);

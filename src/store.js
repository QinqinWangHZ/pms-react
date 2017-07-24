import Config from './config/config';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';

// 异步action中间件
const middleware = [ thunk ];

// 判断环境是否是开发环境
const node_env = Config.environment[Config.scheme_env];
if(node_env === 'dev') {
	middleware.push(createLogger());
}

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

export default (store);

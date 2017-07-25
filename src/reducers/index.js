import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import home from './home/home';
import list from './list/list';
import login from './login/login';
import test from './test/test';

export default combineReducers({
  routing,
  home,
  list,
  login,
  test,
});

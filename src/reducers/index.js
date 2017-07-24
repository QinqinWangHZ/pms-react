import { combineReducers } from 'redux'
import home from './home/home';
import list from './list/list';
import login from './login/login';

export default combineReducers({
  home,
  list,
  login
})

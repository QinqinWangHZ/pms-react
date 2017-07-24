import { combineReducers } from 'redux'
import home from './home/home';
import list from './list/list';

export default combineReducers({
  home,
  list
})

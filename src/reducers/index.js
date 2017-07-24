import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import home from './home/home';
import list from './list/list';

export default combineReducers({
  routing,
  home,
  list
})

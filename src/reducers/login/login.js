import { combineReducers } from 'redux'
import { LOGIN, LOGIN_ERROR } from '../../actions/login/login'

function login(state = '', action) {
  console.log(action.type);
  switch (action.type) {
    case LOGIN:
      // return action.token;
      return 'name:siisis';
      break;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  login
})

export default todoApp
import { combineReducers } from 'redux';
import { LOGIN } from '../../actions/login/login';

function login(state = '', action) {
  console.log(action.type);
  switch (action.type) {
    case LOGIN:
      // return action.token;
      return Object.assign({}, state, {
        token: 'jajjaj',
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  login,
});

export default todoApp;

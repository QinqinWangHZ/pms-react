import hashHistory from '../history';
import { loginFetch } from '../actions/login/login';


export function signIn(params) {
  return (dispatch) => {
    dispatch(loginFetch(params.mail, params.password, () => {
      hashHistory.push('/page');
    }));
  };
}

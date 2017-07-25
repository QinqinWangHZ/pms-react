import Config from '../../config/config';
import Storage from '../../storage';
import Fetch from '../../api/fetch';


export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = (token) => {
  return {
    type: LOGIN,
    token,
  };
};

export function loginFetch(username, password, redirect) {
  // fetch login
  return (dispatch) => {
    Fetch(Config.loginUrl, 'GET', `username=${username}&password=${password}&grant_type=password`, (data) => {
      Storage.put('custId', data.custId);
      Storage.put('token', data.access_token);
      dispatch(login(data.access_token));
      // 页面跳转
      if (redirect) {
        redirect();
      }
      console.log(data);
    }, (error) => {
      dispatch(alert('帐号或密码错误'));
    });
  };
}

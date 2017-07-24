import Config from '../../config/config'
import Storage from '../../storage'
import { BrowserRouter, Redirect } from 'react-router'


export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'


export function loginFetch(username,password,redirect){
  // fetch login
  return dispatch => {
    fetch(Config.loginUrl + `?username=${username}&password=${password}&grant_type=password`)
    .then((response) => response.json() )
    .then((data) => {
      if(!data.error){
        // 持久化
         // for(var item in data){
         //     Storage.put(item.toString(),data[item])
         // }
        Storage.put('custId',data.custId)
        Storage.put('token',data.access_token)
        dispatch(login(data.access_token))
        // 页面跳转
        if (redirect) {
          redirect()
        }
        console.log(data);
      }else{
       dispatch(alert('帐号或密码错误'))
      }
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
}




export const loginError = (message) => {
  return {
    type: LOGIN_ERROR,
    message
  }
}

export const login = (token) => {
  return {
    type: LOGIN,
    token
  }
}


export function logoutFetch(redirect){
  // fetch login
  return dispatch => { 
    fetch('./json/home.json',{
      method: 'get'
    })
    .then((response) => {
      // 持久化
      Storage.clear()
     
      dispatch(login(''))
      // 页面跳转
      if (redirect) redirect()
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

}
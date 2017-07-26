import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { hashHistory, Link } from 'react-router';
import { loginFetch } from '../actions/login/login';


// 测试引入jquery
$('#test').html('两只小蜜蜂');

class Login extends Component {
  login() {
    const { dispatch } = this.props;

    // validate
    if (!this.username.value) {
      alert('请输入用户名');
      return;
    } else if (!this.password.value) {
      alert('请输入密码');
      return;
    }
    const page = this.props.params.page;

    dispatch(loginFetch(this.username.value, this.password.value, () => {
      hashHistory.push(page ? page.replace(/-/g, '/') : '/');
    }));
  }

  render() {
    return (
      <div className="loginC">
        <div className="container">
          <div className="innerbox">
            <div className="login clearfix">
              <div className="logForm">
                <ul>
                  <li className="formgroup">
                    <div className="forminput">
                      <span className="login-form-username" /><input className="input" type="text" name="user_name" placeholder="请输入手机号" maxLength="11" ref={(username) => { this.username = username; }} />
                    </div>
                  </li>
                  <li className="formgroup">
                    <div className="forminput">
                      <span className="login-form-password" /><input id="password" className="input" type="password" name="password" placeholder="请输入密码" ref={(password) => { this.password = password; }} />
                    </div>
                  </li>
                  <li className="formgroup">
                    <em className="fl"><input id="rememberMe" name="rememberMe" type="checkbox" />&nbsp;记住用户名</em>
                    <em className="fr"><a href="forget_password.html">忘记密码？</a></em></li>
                  <li className="formgroup btn">
                    <button id="submit_login" type="submit" className="ui-btn ui-btn-big" onClick={() => this.login()}> <span>立即登录</span> </button>
                  </li>
                  <li className="formgroup">
                    <em className="fr">没有账号？ <Link to="register">立即注册</Link></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function map(state) {
  console.log('qinqin');
  console.log(state);
  return {
  };
}

export default connect(map)(Login);

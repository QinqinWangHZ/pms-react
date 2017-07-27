require('es6-promise').polyfill();
import axios from 'axios';

import {browserHistory} from 'react-router';
import {message} from 'antd';

// axios 配置
axios.defaults.timeout = 5000;
// 配置基本的url
// axios.defaults.baseURL = 'https://api.github.com';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  //所有请求的参数加上deviceinfo
	// Object.assign(request.params, DEVICE_INFO);
  // console.log(config);
  // 在发送请求之前做些什么
  // 判断有没有token
  // if(typeof ACCESS_TOKEN !== 'undefined') {
	// 	Object.assign(request.params, {
	// 		access_token: 'web-' + ACCESS_TOKEN
	// 	});
	// }
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       // 进行状态码的判断
  //   }
  // }
  // 例如可以输入一些错误信息
  return Promise.reject(error);
});

export default axios;

const serviceUrl = 'http://dsppre.adbaitai.com' 

// let Config = {
//     "scheme": "beta",
//     "scheme_env":"dev",
//     "environment":{
//       "dev":"dev",
//       "production":"production"
//     },
//     "production": {
//       "loginUrl": {
//         "url": "/api/resource/test"
//       }
//     },
//     "env": {
//       "alpha": {
//         "url_prefix": "http://beta.yinyuetai.com:9019"
//       },
//       "beta": {
//         "url_prefix": "http://beta.yinyuetai.com:9093"
//       },
//       "release": {
//         "url_prefix": "http://stapi.yinyuetai.com"
//       },
//       "loginUrl": {
//         "url_prefix" : "mock/596f24a4a1d30433d837c216/example/user"
//       },
//       "test": {
//         "url_prefix": "/api/public/city/areas/get"
//       }
//     },
//     "prefix": "",
//     "domains": {
//         "urlStatic": "http://s.yytcdn.com",
//         "loginSite": "http://login.yinyuetai.com",
//         "mainSite": "http://www.yinyuetai.com",
//         "mvSite": "http://mv.yinyuetai.com",
//         "homeSite": "http://i.yinyuetai.com",
//         "vchartSite": "http://vchart.yinyuetai.com",
//         "commentSite": "http://comment.yinyuetai.com",
//         "playlistSite": "http://pl.yinyuetai.com",
//         "searcresiehSite": "http://so.yinyuetai.com",
//         "vSite": "http://v.yinyuetai.com",
//         "fanSite": "",
//         "paySite": "",
//         "tradeSite": "",
//         "shopSite": "",
//         "vipSite": ""
//     }
// };
let Config = {};
if (process.env.NODE_ENV === 'production') {
  Config = {
    test:'/api/resource/test'
  }
}else{
  Config = {
    test: '/api/public/city/areas/get',
    loginUrl: '/mock/596f24a4a1d30433d837c216/example/user' // 登录mock
  }
}
Config.environment = {
  "dev":"dev",
  "production":"production"
}

export default Config

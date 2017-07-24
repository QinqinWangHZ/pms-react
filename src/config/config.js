const serviceUrl = 'http://dsppre.adbaitai.com' 

let Config = {};
if (process.env.NODE_ENV === 'production') {
  Config = {
    test:'/api/resource/test'
  }
}else{
  Config = {
    test: '/api/public/city/areas/get',
    loginUrl: '/sapi/index/artist/tops.json' // 登录mock
  }
}
Config.environment = {
  "dev":"dev",
  "production":"production"
}

export default Config

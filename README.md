- #### 系统名称：PMS
- #### 开发人员
  - 前端开发：王琴琴、曹西锋
  - 服务端：纪印政、梁国荣
  - 产品：陈超、黄梦雅、杨新华
  - 测试：曹品琳
  - UI： xxx
- #### 项目地址
  - [项目交互地址](http://f5gyge.axshare.com/#g=1&p=流程-在住订单换房) --http://f5gyge.axshare.com/#g=1&p=流程-在住订单换房
  - [文档地址](http://wiki.corp.qunar.com/confluence/display/payment/1.1_20130808-CashierPay) --http://wiki.corp.qunar.com/confluence/display/payment/1.1_20130808-CashierPay
  - [视觉地址](xxx)--待定
- #### 项目主要目录结构
    doc // 文档说明，比如接口说明
    mock // mock数据
    src
      actions
      api // 接口
      components // 组件
      config // 区分环境变量
      containers // view
      images // 静态资源-图片
      middleware // 中间件
      reducers // state
      stylesheet // 样式
      utils // 公共方法
      history.js
      main.js // 首页js
      routers.js // 路由的管理
      store.js // store
      storage.js // 缓存
    static // 静态资源
      jquery
    test // 测试
    .eslintrc // eslint检测规则
    .bower.json
    package.json
    webpack.config.js // webpack构建
    index.html // 首页
- #### 项目命令
  - 版本管理使用git,down代码前请确保安装
  - bower i 、 cnpm i 安装依赖，可使用nrm切换成淘宝镜像，直接使用npm
  - cnpm run dev 进行本地调试
  - cnpm run build 进行打包
  - cnpm run lint 语法检测
- #### 其他说明
  - 当前项目，react版本为15.3.2
  - react-router 2.6.0
  - react-redux 4.4.5 

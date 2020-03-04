/**
 * 服务调用对象配置
 * @type {Object}
 */
const conf = {
  // 主域
  commonConfig: {
    baseURL: 'http://localhost:8989/',
    timeout: 5000,
    withCredentials: true
  },
  root: {
    // mock域
    mockCtmc: {
      baseURL: '/ctmc',
      timeout: 2000,
      withCredentials: true
    },
    // 真实请求域
    ctmc: {
      baseURL: '',
      // baseURL: '',   /*生产环境*/
      //baseURL: '', /*后台测试*/
      //baseURL: '',/*测试*/
      timeout: 100000,
      withCredentials: true
    },
    // 文件模版域
    ctmcTemplate: {
      baseURL: '',
      timeout: 10000,
      withCredentials: true
    }
  }
};

// 静态配置对象，此对象在 /staticConfig/app-conf.js 内配置
const appConf = window.APP_CONF

// 将优先的静态配置覆盖本配置
function overrideConf() {
  let urls = (appConf || appConf.baseURL)
  let root = conf.root
  if (urls) {
    for (let key in urls) {
      if (key in root) {
        root[key].baseURL = urls[key]
      }
    }
  }
}

// 调整配置优先级
overrideConf()

export default conf


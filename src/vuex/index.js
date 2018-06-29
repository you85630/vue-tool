import Vue from 'vue'
import Vuex from 'vuex'
import router from './../router'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 登录
    account: {},
    // 登录错误提示
    errorMsg: '',
    // 左导航
    leftNav: [
      {
        name: 'CSS形状',
        linkto: '/home/shapesCss'
      }, {
        name: '配色表',
        linkto: '/home/webColor'
      }, {
        name: '字数统计',
        linkto: '/home/wordCount'
      }, {
        name: 'HTML转JS',
        linkto: '/home/htmlString'
      }, {
        name: 'FlexBox属性',
        linkto: '/home/flexBox'
      }, {
        name: '雪碧图',
        linkto: '/home/spritePic'
      }, {
        name: 'office预览',
        linkto: '/home/showoffice'
      }, {
        name: '上传剪切头像',
        linkto: '/home/cutcover'
      }
    ]
  },
  getters: {
    // 登录
    account: (state) => state.account,
    // 登录错误提示
    errorMsg: (state) => state.errorMsg,
    // 左导航
    leftNav: (state) => state.leftNav
  },
  actions: {
    // 登录
    login: ({
      commit
    }, key) => commit('login', key),
    // 登出
    exit: ({
      commit
    }) => commit('exit')
  },
  mutations: {
    // 登录
    login: (state, key) => {
      console.log(key)
      state.account = {}
      router.push('/home/index')
    },
    // 登出
    exit: (state) => {
      localStorage.clear()
      router.push('/login')
    }
  }
})

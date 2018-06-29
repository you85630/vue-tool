import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const notfound = () => import('views/notfound')
const home = () => import('views/home')

const index = () => import('components/psges/index')
const shapesCss = () => import('components/psges/shapes-css')
const wordCount = () => import('components/psges/word-count')
const htmlString = () => import('components/psges/html-string')
const webColor = () => import('components/psges/web-color')
const flexBox = () => import('components/psges/flex-box')
const spritePic = () => import('components/psges/sprite-pic')
const showoffice = () => import('components/psges/show-office')
const cutcover = () => import('components/psges/cut-cover')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: index
        },
        {
          path: '/home/wordCount',
          name: 'wordCount',
          component: wordCount
        },
        {
          path: '/home/shapesCss',
          name: 'shapesCss',
          component: shapesCss
        },
        {
          path: '/home/htmlString',
          name: 'htmlString',
          component: htmlString
        },
        {
          path: '/home/webColor',
          name: 'webColor',
          component: webColor
        },
        {
          path: '/home/flexBox',
          name: 'flexBox',
          component: flexBox
        },
        {
          path: '/home/spritePic',
          name: 'spritePic',
          component: spritePic
        },
        {
          path: '/home/showoffice',
          name: 'showoffice',
          component: showoffice
        },
        {
          path: '/home/cutcover',
          name: 'cutcover',
          component: cutcover
        }
      ]
    }
  ]
})

// // 验证 token，存在才跳转
// router.beforeEach((to, from, next) => {
//   let login = localStorage.getItem('login')
//   if (to.meta.requireAuth) {
//     if (!login) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   }
//   next()
// })

export default router

import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Router from 'vue-router'
import { message } from 'ant-design-vue'
const routes = [
  //登录
  {
    path: '/',
    name: 'Login',
    hidden: false,
    meta: {
      title: '登录'
    },
    component: () => import('../views/acount/Login.vue'),
    children: []
    //路由独享组件
    // beforeEnter: (to, from, next) => {
    //   console.log('to:', to)
    //   console.log(from)
    //   next()
    // }
  },
  //注册
  {
    path: '/register',
    name: 'Register',
    hidden: false,
    meta: {
      title: '注册'
    },
    component: () => import('../views/acount/Register.vue'),
    children: []
  },
  //忘记密码
  {
    path: '/forget',
    name: 'Forget',
    hidden: false,
    meta: {
      title: '忘记密码'
    },
    component: () => import('../views/acount/Forget.vue'),
    children: []
  },

  //后台主页
  {
    path: '/index',
    name: 'Index',
    hidden: true,
    meta: {
      title: '后台',
      class: 'icon-nangua'
    },
    component: () => import('../views/layout/Index.vue'),
    children: [
      //首页
      {
        //path: '/shouye/:id(\\d+)',/shouye/1  /shouye/2   /会变成根节点
        // path: '/shouye/:username(\\d+)',
        path: '/shouye',
        name: 'Shouye',
        hidden: true,
        // props: true, //变成布尔值，route.params 将被设置为组件的 props
        props: {
          id: '我是转过来的props'
        },
        meta: {
          title: '首页',
          belong: '后台',
          timu: '首页',
          class: 'icon-nangua'
        },
        component: () => import('../views/shouye/Shouye.vue')
      }
    ]
  },

  {
    path: '/kaifaindex',
    name: 'KaifaIndex',
    hidden: true,
    meta: {
      title: '开发管理',
      class: 'icon-fuzu'
    },
    component: () => import('../views/layout/Index.vue'),
    //开发管理
    children: [
      //系统配置
      {
        path: '/systemconfiguration',
        name: 'Systemconfiguration',
        hidden: true,
        meta: {
          title: '系统配置',
          belong: '开发管理',
          timu: '首页',
          class: 'icon-yingtao'
        },
        component: () =>
          import('../views/development management/System configuration.vue')
      },

      //邮件发送
      {
        path: '/mailsending',
        name: 'Mailsending',
        hidden: true,
        meta: {
          title: '邮件发送',
          belong: '开发管理',
          timu: '首页',
          class: 'icon-yangcong'
        },
        component: () =>
          import('../views/development management/Mail sending.vue')
      }
    ]
  },
  {
    path: '/jinjieindex',
    name: 'JinjieIndex',
    hidden: true,
    meta: {
      title: '进阶',
      class: 'icon-fuzu'
    },
    component: () => import('../views/layout/Index.vue'),

    children: [
      {
        path: '/post',
        name: 'Post',
        hidden: true,
        meta: {
          title: '数据获取之后',
          belong: '进阶',
          timu: '首页',
          class: 'icon-yingtao'
        },
        component: () => import('../views/jinjie/Post.vue')
      },
      {
        path: '/postfront',
        name: 'Post front',
        hidden: true,
        meta: {
          title: '数据获取之前',
          belong: '进阶',
          timu: '首页',
          class: 'icon-yingtao'
        },
        component: () => import('../views/jinjie/Post front.vue')
      }
    ]
  },
  {
    path: '/vuexindex',
    name: 'Vuexindex',
    hidden: true,
    meta: {
      title: 'vuex',
      class: 'icon-fuzu'
    },
    component: () => import('../views/layout/Index.vue'),

    children: [
      {
        path: '/state',
        name: 'State',
        hidden: true,
        meta: {
          title: 'state',
          belong: 'vuex',
          timu: '首页',
          class: 'icon-fuzu'
        },
        component: () => import('../views/vuex/State.vue')
      },
      {
        path: '/getters',
        name: 'Getters',
        hidden: true,
        meta: {
          title: 'getters',
          belong: 'vuex',
          timu: '首页',
          class: 'icon-yingtao'
        },
        component: () => import('../views/vuex/Getters.vue')
      },
      {
        path: '/actions',
        name: 'Actions',
        hidden: true,
        meta: {
          title: 'actions',
          belong: 'vuex',
          timu: '首页',
          class: 'icon-yangcong'
        },
        component: () => import('../views/vuex/Actions.vue')
      },
      {
        path: '/modules',
        name: 'Modules',
        hidden: true,
        meta: {
          title: 'modules',
          belong: 'vuex',
          timu: '首页',
          class: 'icon-yangcong'
        },
        component: () => import('../views/vuex/Modules.vue')
      }
    ]
  },
  //404
  {
    path: '/:all*',
    name: 'Error',
    hidden: false,
    component: () => import('../views/Error.vue')
  },
  //重定向是跳转
  //别名是加载，但是地址栏不变
  {
    path: '/a',
    // redirect: '/shouye'
    redirect: (to) => {
      console.log('目标路由', to)
      return { path: '/shouye' }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(), //createWebHashHistory对SEO不太好，搜索引擎优化不好
  base: process.env.BASE_URL, //会跟publicPath 一样
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

//全局前置守卫
router.beforeEach((to, from, next) => {
  //去的页面不是登录页，并且身份还没通过
  // console.log('to:', to)
  // console.log(from)
  if (
    to.name !== 'Login' &&
    to.name !== 'Register' &&
    to.name !== 'Forget' &&
    !sessionStorage.getItem('token')
  ) {
    message.error('请先登录')
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router

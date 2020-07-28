import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true,
        hideNavBar: true,
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true,
        hideNavBar: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
      meta: {
        authNotRequired: true,
        hideNavBar: true,
        transition: "fade"
      }
    },
    {
      path: '/app/dex/:accountId?/:widgetType?/:widgetId?',
      name: 'app',
      component: () =>
        import(/* webpackChunkName: "client-chunk-overview" */ '@/views/App.vue'),
      meta: {
        transition: "fade"
      }
    },
    {
      path: '/app/browse/:accountId?/:widgetType?/:widgetId?',
      name: 'browse',
      component: () =>
        import(/* webpackChunkName: "client-chunk-overview" */ '@/views/WidgetBrowser.vue'),
      meta: {
        transition: "fade",
        hideNavBar: true,
      }
    },
    {
      path: '/app/news',
      name: 'news',
      component: () =>
        import(/* webpackChunkName: "client-chunk-news" */ '@/views/News.vue')
    },
    {
      path: '/app/watchlist',
      name: 'watchlist',
      component: () =>
        import(/* webpackChunkName: "client-chunk-watchlist" */ '@/views/Watchlist.vue')
    },
    { path: '*', redirect: '/home' }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import shop from '@/components/shopping/shop'
import takeout from '@/components/takeout/takeout'
import shopping from '@/components/shopping/shopping'
import order from '@/components/order/order'
import me from '@/components/me/me'
import Login from '@/components/login.vue'
import set from '@/components/me/set'
import personal from '@/components/me/personal'
import changename from '@/components/me/changename'
import carts from '@/components/shopping/carts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/takeout'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/takeout',
      component: takeout
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/set',
      component: set
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/changename',
      component: changename
    },
    {
      path: '/carts',
      component: carts
    }
  ]
})

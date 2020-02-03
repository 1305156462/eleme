import Vue from 'vue'
import Router from 'vue-router'
import lowercase from '@/components/lowercase/lowercase'
import takeout from '@/components/takeout/takeout'
import shopping from '@/components/shopping/shopping'
import order from '@/components/order/order'
import me from '@/components/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'takeout',
      component: takeout
    },
    {
      path: '/lowercase',
      component: lowercase
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
    }
  ]
})

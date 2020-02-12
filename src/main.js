// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AlertPlugin, ToastPlugin } from 'vux'
import VueScroller from 'vue-scroller'
import VueResource from 'vue-resource'
import store from './store/index.js'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueScroller)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

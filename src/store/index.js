import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    code: '',
    id: '',
    photo: '/static/userphoto/饿了么.png',
    token: window.sessionStorage.getItem('token')
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data
      window.sessionStorage.setItem('token', data)
    }
  }
})

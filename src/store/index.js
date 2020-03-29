import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: window.sessionStorage.getItem('name'),
    id: window.sessionStorage.getItem('id'),
    photo: window.sessionStorage.getItem('photo'),
    token: window.sessionStorage.getItem('token'),
    cartlist: window.sessionStorage.getItem('cartlist')
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data
      window.sessionStorage.setItem('token', data)
    },
    SET_NAME: (state, data) => {
      state.name = data
      window.sessionStorage.setItem('name', data)
    },
    SET_ID: (state, data) => {
      state.id = data
      window.sessionStorage.setItem('id', data)
    },
    SET_PHOTO: (state, data) => {
      state.photo = data
      window.sessionStorage.setItem('photo', data)
    },
    SET_CARTLIST: (state, data) => {
      state.cartlist = data
      window.sessionStorage.setItem('cartlist', data)
    }
  }
})

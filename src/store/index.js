import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    isLogin: false,
    user: {}
  },
  mutations: {
    AUTH_SUCCESS (state, user) {
      state.status = 'success'
      state.user = user
      state.isLogin = true
    },
    AUTH_ERROR (state) {
      state.status = 'error'
    },
    LOGOUT (state) {
      state.status = ''
      state.token = ''
      state.isLogin = false
    }
  },
  getters: {
    getStatus: state => {
      return state.status
    },
    getLoginStatus: state => {
      return state.isLogin
    },
    getName: state => {
      return state.user.name
    },
    getPhone: state => {
      return state.user.phone
    },
    getEmail: state => {
      return state.user.email
    },
    getAddress: state => {
      return state.user.address
    },
    getGSTPin: state => {
      return state.user.gstPin
    },
    getmerchantName: state => {
      return state.user.merchantName
    },
    getmerchantEmail: state => {
      return state.user.merchantId
    },
    getPassword: state => {
      return state.user.password
    }
  },
  actions: {
    fetchStatus (context, user) {
      if (user) {
        context.commit('AUTH_SUCCESS', user)
        console.log('in success')
      } else {
        context.commit('AUTH_ERROR')
        console.log('in error')
      }
    },
    logoutStatus (context) {
      context.commit('LOGOUT')
    }
  },
  modules: {
  }
})

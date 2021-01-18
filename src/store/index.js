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
    }
  },
  actions: {
    fetchStatus (context, user) {
      if (user) {
        context.commit('AUTH_SUCCESS', user)
      } else {
        context.commit('AUTH_ERROR')
      }
    },
    logoutStatus (context) {
      context.commit('LOGOUT')
    }
  },
  modules: {
  }
})

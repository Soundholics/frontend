import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BNavbar, BCarousel, VBModal } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('b-navbar', BNavbar)
Vue.component('b-carousel', BCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.directive('b-modal', VBModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

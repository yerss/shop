import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./assets/js/bootstrap')
require('./assets/js/slider-animat')
require('./assets/js/bootstrap-notify.min')
require('./assets/js/slick')
require('./assets/js/popper.min')

const feather = require('./assets/js/icons/feather-icon/feather.min')
feather.replace()

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

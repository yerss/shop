import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./assets/js/bootstrap')
require('./assets/js/slider-animat')
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

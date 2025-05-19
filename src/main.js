import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'

import '@/assets/styles/fonts.css'
import '@/assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

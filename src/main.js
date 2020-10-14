import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
// tambahkan ini

Vue.config.productionTip = false
//tambahkan ini

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//custom global styles import
import "@/assets/style/index.scss";

//Bootstrap import
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

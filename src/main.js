import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { store } from './store/store'
import Routes from './routes/routes'

// import bootstrap vue related items
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/fonts/line-icons.css'
import './assets/css/animate.css'
import './assets/css/main.scss'
import './assets/css/responsive.css'

// Vue.use(BootstrapVue);
// main components
import NavBar from './components/Header'
import Footer from './components/FooterSection'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.component('header-section', NavBar)
Vue.component('footer-section', Footer)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App) // components: { App }, template: '<App/>' el: '#app'
}).$mount('#app')

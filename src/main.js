import Vue from 'vue'
import App from './App.vue'

import VueRouter   from 'vue-router'
import VueResource from 'vue-resource'
import { store }   from './store/store'
import Routes      from './routes/routes'
import VueScrollReveal from 'vue-scroll-reveal';


// import bootstrap vue related items
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/fonts/line-icons.css'
import './assets/css/animate.css'
import './assets/css/main.scss'

// Vue.use(BootstrapVue);
// main components
import NavBar      from './components/Nav'
import Footer      from './components/FooterSection'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

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

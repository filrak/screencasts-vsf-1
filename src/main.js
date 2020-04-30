import Vue from 'vue'
import App from './App.vue'
import CompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Protected from './Protected.vue'

Vue.use(CompositionAPI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { component: Home, path: '/' },
    { component: Protected, path: '/protected' }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

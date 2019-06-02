import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import router from './routes'
import store from './store/store'
import FirebaseAuthPlugin from './firebase/'
import VueCountdownTimer from 'vuejs-countdown-timer'


Vue.config.productionTip = false
Vue.use(FirebaseAuthPlugin, VueCountdownTimer)
Vue.use(Vuetify)

sync(store, router)

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
      return "0"+value.toString();
  }
  return value.toString();
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const app = new Vue({
//   router,
//   store,
//   ...App
// })

export { router, store }

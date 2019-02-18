import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import iView from 'iview'







new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})

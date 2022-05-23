import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import {auth} from './firebase'
import vuetify from './plugins/vuetify'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

auth.onAuthStateChanged(user => {
  if (user){
    const detectoUser = {
      email: user.email,
      uid: user.uid
    }
    //acceso al store para acticar una acción
    store.dispatch('detectUser',detectoUser)
    console.log("Usuario logueado")
  }else{
    console.log(user)
    console.log("No logueado")
    store.dispatch('detectUser',user)

  }

  // moviendo para renddimiento
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')


})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

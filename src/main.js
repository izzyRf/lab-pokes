import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {auth} from './firebase'
import vuetify from './plugins/vuetify'

auth.onAuthStateChanged(user => {
  if (user){
    const detectoUser = {
      email: user.email,
      uid: user.uid
    }
    //acceso al store para acticar una acción
    store.dispatch('detectUser',detectoUser)
    console.log("despachando acccion")
  }else{
    console.log(user)
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

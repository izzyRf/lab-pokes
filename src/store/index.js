import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:null,
    error:null,
  },
  getters: {
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state , payload){
      state.error = payload
    }
  },
  actions: {
    crearUsuario({commit}, usuario){
     auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
          .then(res =>{
            console.log(res)
            const usuarioCreado = {
              email: res.user.email,
              uid: res.user.uid
            }
            commit('setUsuario', usuarioCreado)
            router.push('/')
          })
          .catch(error => {
            console.log(error)
            commit('setError', error)

            
          })
    },
    ingresoUsuario({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user)
          const usuarioLoggeado = {
            email: user.email,
            uid: user.uid
          }
          commit('setUsuario', usuarioLoggeado)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode +" error message:" +errorMessage)
          commit('setError', errorCode)

        });
    },
    cerrarSesion({commit}){
      auth.signOut().then(() => {
        console.log("Haz salido de la pagina")
        router.push('/')
      })
    },
    detectUser({commit}, usuario){
      commit('setUsuario', usuario)
    }
  },
  getters:{
    existeUser(state){
      if (state.usuario === null){
        return false
      }else{
        return true
      }
    }
  },
  modules: {
  }
})

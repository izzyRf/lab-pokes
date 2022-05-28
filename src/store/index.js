import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:null,
    error:null,
    pokedex:[],
    darkMode:false,
    refresh:false
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state , payload){
      state.error = payload
    },
    addPoke(state , payload){
      state.pokedex.push(payload)
    },
    deletePoke(state , payload){
      console.log("filtra"+payload.id)
      var poke = state.pokedex
      const result = poke.filter(poke => poke.id != payload.id);
      state.pokedex = result

    },
    changeMode(state , payload){
      state.darkMode = payload
      //meter a local storage el cambio
      localStorage.setItem('darkModel', state.darkMode)
      console.log("cambio estado dark mode: "+ state.darkMode)
    },
    changeRef(state , payload){
      state.refresh = payload
      //meter a local storage el cambio
      //localStorage.setItem('darkModel', state.darkMode)
      console.log("cambio estado dark mode: "+ state.refresh)
    },
    cargar(state , payload){
      console.log("cargando value: "+payload)
      state.darkMode = payload
    },
    clearPoke(state, payload){
      state.pokedex = [];
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
          router.push('/home')
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
    },
    addPokemon({commit}, pokemon){
      console.log("haciendo commit en add pomkemon")
      commit('addPoke', pokemon)
    },
    deletePokemon({commit}, pokemon){
      console.log("haciendo commit en add pomkemon")
      commit('deletePoke', pokemon)
    },
    changeTeme({commit}, mode){
      commit('changeMode', mode)
    },
    cargarStorage({commit}){
      if(localStorage.getItem('darkModel')){
        var parseBool = localStorage.getItem('darkModel').valueOf()
        
        var darkMode = JSON.parse(parseBool) === true;
         
        commit('cargar', darkMode)

        console.log('cargando local stoorage'+darkMode + 'tesst  ')
       
        return
      }else{
      localStorage.setItem('darkModel', false)
      console.log("variable LS creada ")

      }
    },
    clearPokedex({commit}){
      commit('clearPoke')
    },
    changeRef({commit}, mode){
      commit('changeRef', mode)
    },
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

<template>
  <div>
    <h4>Acceso</h4>
     
    <form @submit.prevent="ingresoUsuario({email: email , password: pass })">
        <input 
             type="email" 
             placeholder="Ingrese email"
             v-model="email"
         >
         <input 
             type="password" 
             placeholder="Ingrese contraseña"
             v-model="pass"
         >
            {{error}}

         <button type="submit">Acceder</button>
    </form> 
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name:'Acceder',
  data () {
    return {
      email:'',
      pass:''
    }
  },
  methods: {
      ...mapActions(['ingresoUsuario'])
  },
   computed:{
      ...mapState(['error'])
  },

}
</script>

<style>

</style>
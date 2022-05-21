<template>
  <!-- registro -->
  <div>
      <h3>Welcome!</h3>
        <form @submit.prevent="crearUsuario({email: email , password: pass1})">
            <input 
                type="email" 
                placeholder="Ingrese email"
                v-model="email"
            >
            <p>{{error}}</p>
            <input 
                type="password" 
                placeholder="Ingrese contraseña"
                v-model="pass1"
            >
            <input 
                type="password" 
                placeholder="Repita contraseña"
                v-model="pass2"
            >
            <button type="submit">Registrar Usuario</button>
        </form>
        
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'


export default {
  name: 'Registro',
  methods: {
      ...mapActions(['crearUsuario'])
  },
  computed:{
      ...mapState(['error'])
  },
  created(){   
  },
    
 data () {
    return {
      email: '',
      pass1: '',
      pass2: ''
    }
  },
}
</script>

<style>

</style>
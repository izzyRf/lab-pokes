<template>
  <!-- <form @submit.prevent="ingresoUsuario({email: email , password: pass })">
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
    </form>  -->
    <div>
        <v-card
    class="mx-auto"
    max-width="400"
  >
    
    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="12"
        >
        <form @submit.prevent="ingresoUsuario({email: email , password: pass })">
        <v-text-field
          label="correo"
          :rules="rules"
          hide-details="auto"
          type="email"
          v-model="email"
        ></v-text-field>
        
         <v-text-field
          label="Contraseña"
          hide-details="auto"
          type="password"
          v-model="pass"
        ></v-text-field>

    
        <v-divider></v-divider>

          <v-btn type="submit">
            Acceder
            </v-btn>
        </form>
        </v-col>
      </v-row>
        </v-card-text>

  </v-card>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name:'Acceder',
  data () {
    return {
      email:'',
      pass:'',
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
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
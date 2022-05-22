<template>
  <!-- registro -->
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
        <form @submit.prevent="crearUsuario({email: email , password: pass1})">
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
          v-model="pass1"
        ></v-text-field>

        <v-text-field
          label="Confirma contraseña"
          hide-details="auto"
          type="password"
          v-model="pass2"
        ></v-text-field>
        <v-divider></v-divider>

          <v-btn type="submit">
            registrar
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
      pass2: '',
      //input styles
       alignments: [
        'start',
        'center',
        'end',
      ],
       rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }
  },
}
</script>

<style>

</style>
<template>

    <v-card
    class="mx-auto"
    max-width="400"
    dark
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

          <v-btn
              outlined
              color="green"
              x-large
              type="submit"
              :disabled="bloquear"
              class="centerTitulo"
            >
            <v-icon>mdi-login</v-icon>Ingresar
            </v-btn>
        </form>
        </v-col>
      </v-row>
        </v-card-text>

  </v-card>
   
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
      ...mapActions(['ingresoUsuario']),
        validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
   computed:{
      ...mapState(['error']),
       bloquear() {
          return this.email.trim() === "" || !this.validEmail(this.email) || (this.pass.length<6 ) ? true : false;
      }
  },

}
</script>

<style  lang="scss" src="../scss/main.scss">

</style>
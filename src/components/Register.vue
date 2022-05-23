<template>
  <!-- registro -->

  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2 "
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
              :rules="rules2"
              type="password"
              v-model="pass1"
            ></v-text-field>

            <v-text-field
              label="Confirma contraseña"
              hide-details="auto"
              :rules="rules2"
              type="password"
              v-model="pass2"
            ></v-text-field>
            <v-divider></v-divider>
            <v-btn
              class="ma-2 "
              outlined
              color="error"
              x-large
              :disabled="bloquear"
              type="submit"
            >
            <v-icon>mdi-account-plus</v-icon>Registrarme
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
  name: 'Registro',
  methods: {
      ...mapActions(['crearUsuario']),
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  computed:{
      ...mapState(['error']),
      bloquear() {
          return this.email.trim() === "" || this.pass1 !== this.pass2 || (this.pass1.length<6 && this.pass2.length<6) ? true : false;
      }
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
        value => !!value || 'Requerido.',
        value => (value && value.length >= 3) || 'Ingrese minimo 3 caracteres',
        value => this.validEmail(value) || 'Ingrese un correo valido',
      ],
      rules2: [
        value => !!value || 'Requerido.',
        value => (value && value.length >= 6) || 'Ingrese minimo 6 caracteres',

      ],
      
    }
  },
}
</script>

<style  lang="scss" src="../scss/main.scss">

</style>
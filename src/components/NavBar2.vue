<template>
  <v-card
    color="grey lighten-4"
    flat
    height="90px"
    tile
  >
    <v-toolbar
      extended
      extension-height="10"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title >Pokes</v-toolbar-title>

      <v-spacer></v-spacer>

    <v-btn
      class="ma-2"
      outlined
      large
      to="/"
      color="indigo"
    >
      Home<v-icon>mdi-pokeball</v-icon>
    </v-btn>
    <v-btn
      class="ma-2"
      outlined
      large
      to="/"
      color="indigo"
    >
      Habilidades<v-icon>mdi-AccessAlarm</v-icon>
    </v-btn>
       <!-- <router-link to="/">Salir<v-icon>mdi-arrow-up-bold-box-outline</v-icon></router-link> -->
      <v-btn
      v-if="existeUser"
      class="ma-2"
      outlined
      large
      color="indigo"
      @click="cerrarSesion"
    >
       cerrar  Sesion
    </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

     <!-- <v-btn
      class="ma-2"
      outlined
      large
      to="/"
      color="indigo"
    >
       
      </v-btn> -->
    <v-switch
      v-model="switch1"
      inset
      :label="`Dark mode: ${switch1.toString() === 'true'? 'Activado' : 'Desactivado'}`"
    ></v-switch>


    </v-toolbar>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
        switch1:false
    }
  },
   methods: {
      ...mapActions(['cerrarSesion'])
  },
  computed:{
    //   ...mapState(['error'])
      ...mapGetters(['existeUser'])
  },
  

}
</script>

<style>

</style>
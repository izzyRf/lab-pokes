<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://images.alphacoders.com/998/thumb-1920-998181.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-spacer></v-spacer>

      <v-app-bar-title class="centerDIV">
          <v-img
            lazy-src="https://e7.pngegg.com/pngimages/811/552/png-clipart-pokemon-logo-pokemon-logo.png"
            max-height="80"
            max-width="120"
            src="../assets/logoPoke.png"
            class="fa fa-align-center"
        ></v-img>
      </v-app-bar-title>

  
      <v-btn
        v-if="existeUser"
        small
        outlined
        to='/home'
      >
        <v-icon>mdi-pokeball</v-icon> Home 
      </v-btn>
     
     <v-btn
      v-if="existeUser"
     
      outlined
      small
      @click="cerrarSesion"
    >
       Salir
    </v-btn>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 100px;">
        
      </v-container>
    </v-sheet>
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
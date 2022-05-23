<template>
<div>

   <v-app-bar  :dark="darkMode">
    <v-toolbar>
    <v-app-bar-nav-icon 
        @click="drawer = true" 
        class="d-flex d-sm-none"
    >
        <v-icon>mdi-pokeball</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon class="d-none d-sm-flex"  to="/" >
        <v-icon>mdi-pokeball</v-icon>
    </v-app-bar-nav-icon>

      <v-toolbar-title class="d-none d-sm-flex">{{usuario.email}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-card-actions class="ml-2 mt-1 centerTitulo">
        <v-img
            lazy-src="https://e7.pngegg.com/pngimages/811/552/png-clipart-pokemon-logo-pokemon-logo.png"
            max-height="80"
            max-width="120"
            src="../assets/logoPoke.png"
            class="fa fa-align-center"
        ></v-img>
        </v-card-actions>

         <v-card-actions class="ml-2 mt-1 centerTitulo">
        <v-btn
      class="ma-2 d-none d-sm-flex"
      outlined
      small
      to="/home"
      color="indigo"
      cols="12"
      col-sm="12"
    >
      Home<v-icon>mdi-pokeball</v-icon>
    </v-btn>
        <v-btn
      class="ma-2 d-none d-sm-flex"
      outlined
      small
      to="/home"
      color="indigo"
      cols="12"
    >
      Habilidades<v-icon>mdi-handball</v-icon>
    </v-btn>
     <v-btn
      v-if="existeUser"
      class="ma-2 d-none d-sm-flex"
      outlined
      small
      color="indigo"
      @click="cerrarSesion"
    >
       Salir<v-icon>mdi-account-arrow-right-outline</v-icon>
    </v-btn>
    <v-switch
     v-if="existeUser"
      class="testI"
      v-model="switch1"
      
      :label="`Dark mode: ${switch1 === true? 'Activado' : 'Desactivado'}`"
      @change="switchMode"
    ></v-switch>
        
    </v-card-actions>

    


    </v-toolbar>

      </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">
      hola
      </v-container>
    </v-sheet> -->
 
   <!-- Add a navigation aside options -->
  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="600px"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >
          <v-list-item to="/">
            <v-list-item-title >Principal</v-list-item-title>
          </v-list-item>
          <v-list-item to="/home">
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="cerrarSesion">Salir</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>
</div>
</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  created () {
     
      
  },
  mounted(){
      this.switch1 = this.darkMode;
      console.log("SWITCH VALUE---->"+this.darkMode)
  },
  data () {
    return {
        switch1:null,
        drawer: false,
        tab: null,
        itemsT: [
        'Principal', 'Habilidad', 'Salir'
      ],
    }
  },
   methods: {
      ...mapActions(['changeTeme','cerrarSesion']),

      switchMode(){
          console.log("switch dark mode"+this.switch1)
          this.changeTeme(this.switch1)
      }
  },
  computed:{
    ...mapState(['darkMode','usuario']),
    ...mapGetters(['existeUser'])
  },
  

}
</script>

<style  lang="scss" src="../scss/main.scss">

</style>
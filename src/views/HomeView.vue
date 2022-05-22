<template>
  <!-- <hello-world /> -->

  <div >


  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Registro
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Acceder
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <!-- <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab> -->
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 2"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat v-if="i === 1">
          <!-- <v-card-text>{{ text }}</v-card-text> -->
          <Registro/>
        </v-card>
        <v-card flat v-if="i === 2">
          <Acceso/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

    <Parallax :altura="'250'" :fuente="'https://fondosmil.com/fondo/12145.jpg'"/>

   

  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Registro from '../components/Register.vue'
  import Parallax from '../components/Parallax.vue'
  import Acceso from '../components/Access.vue'
  


  export default {
  data () {
    return {
       tab: null,
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
    name: 'Home',

    components: {
    HelloWorld,
    Registro,
    Parallax,
    Acceso
},
  }
</script>

<style lang="scss">
  @import '@/assets/scss/global.scss';

  
</style>

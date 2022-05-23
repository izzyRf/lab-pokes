<template>
  <div>
    <NavBar/>

    <MainSection/>



  

    <!-- <Parallax :altura="'450'" :fuente="'https://fondosmil.com/fondo/12145.jpg'"/>
    <Parallax :altura="'450'" :fuente="'https://fondosmil.com/fondo/12145.jpg'"/>

    <Parallax :altura="'450'" :fuente="'https://fondosmil.com/fondo/12145.jpg'"/>

    <Parallax :altura="'450'" :fuente="'https://fondosmil.com/fondo/12145.jpg'"/> -->


   

  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Registro from '../components/Register.vue'
  import Parallax from '../components/Parallax.vue'
  import Acceso from '../components/Access.vue'
  import MainSection from '../components/MainSection.vue'
  import NavBar from '../components/NavBar.vue'
  import { mapGetters } from 'vuex'

  


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
      Acceso,
      NavBar,
      MainSection
    },
    computed:{
      ...mapGetters(['existeUser'])
    }
  }
</script>

<style lang="scss">
  @import '@/assets/scss/global.scss';

  
</style>

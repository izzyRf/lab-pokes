<template>
  <div>
    <NavBar/>
    <CardsSeccion/>
  </div>
</template>

<script>

import NavBar from '../components/NavBar2.vue';
import CardsSeccion from '../components/CardsContent.vue'


export default {
  name:'Panel',
  components:{
      NavBar,
      CardsSeccion
  },
  data () {
    return {
        tipos: [],
        type: [],
        pokemones:[],
        pokemon:[],
        isLoading: false,
        fullPage: true
    }
  },
  methods: {
  },

}
</script>

<style>

</style>

<template>
  <div>
    <NavBar/>
    <!-- <CardsSeccion/> -->
    <PokeDetail :idPoke="idPokemon"/>
  </div>
</template>

<script>

import NavBar from '../components/NavBar2.vue';
import CardsSeccion from '../components/CardsContent.vue'
import PokeDetail from '../components/PokeDetail.vue'
import Loading from 'vue-loading-overlay';


export default {
  created () {
      
  },
  name:'Panel',
  components:{
      NavBar,
      CardsSeccion,
      PokeDetail,
      Loading
  },
  data () {
    return {
        tipos: [],
        type: [],
        pokemones:[],
        pokemon:[],
        isLoading: false,
        fullPage: true,
        idPokemon:0
    }
  },
 
  created(){
    this.idPokemon = Number(this.$route.params.id)
    
  }

}
</script>

<style>

</style>

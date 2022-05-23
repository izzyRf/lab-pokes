<template>
  <div>
      <loading :active.sync="isLoading" 
        :is-full-page="fullPage">
       </loading>

      <h1>DETALLES POKEMON</h1>
      {{idPoke}}
      <!-- STUFF -->
      {{pokemon}}

  </div>
</template>

<script>

import axios from 'axios'
import Loading from 'vue-loading-overlay';
export default {
  data () {
    return {
        pokemon: {},
        isLoading: false,
        fullPage: true
    }
  },
    props:{
        idPoke: Number
    },
    components:{
        Loading,
    },
    methods: {
        async getPokemon(){
        this.isLoading = true;

        if(this.idPoke > 0 ){
            var api = "https://pokeapi.co/api/v2/pokemon/"+this.idPoke
            console.log('consultando api'+api)
            let datos = await axios.get(api)
            let data = datos.data

            const pokemon = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                imgJuego: data.sprites.front_default,
                imgCvg: data.sprites.other.dream_world.front_default,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
                tipo : data.types[0].type.name,
                habilidad :  data.abilities !== null || '' ? data.abilities[0].ability.name : ' No ',
                id:data.id
            };
            this.pokemon = pokemon;
            this.isLoading = false;
        }else{
            this.isLoading = false;
            alert("Paramétro erroneo!")
            return
        }
        

    },
    

  },
  mounted() {
      console.log('created details')
      this.getPokemon()
    }

}
</script>

<style>

</style>
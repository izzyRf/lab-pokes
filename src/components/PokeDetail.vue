<template>
  <div>
      <loading :active.sync="isLoading" 
        :is-full-page="fullPage">
       </loading>
         <!-- CARD pokemon -->
      <v-col md="6" offset-md="3">
        <v-card
            class="mx-auto"
            max-width="700"
            tile
        >
    <v-img
      src="https://cdn.filestackcontent.com/KG7jXtXiQYOAiF2dM5ID/convert?cache=true&crop=0%2C0%2C1920%2C960&crop_first=true&quality=90&w=1920"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-3 centerTitulo"
          cols="12"
        >
          <v-avatar
            class="profile"
            size="164"
            tile
          >
            <v-img :src="this.pokemon.img"></v-img>
          </v-avatar>
           <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{pokemon.nombre}}
              </v-list-item-title>
              <v-list-item-subtitle class="blue--text"> Tipo 
                <v-chip
                    class="ma-2"
                    color="primary"
                >
                    {{pokemon.tipo}}
                </v-chip>
              </v-list-item-subtitle>

            </v-list-item-content>
            
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            blue
          >
           <v-list-item-content>
            <v-alert
                color="red"
                dark
                icon="mdi-pokeball"
                border="left"
                prominent
            >
                <v-list-item-subtitle class="green--text">
                 <v-icon left>
                    mdi-bow-arrow
                  </v-icon>
                Ataque: {{pokemon.ataque}}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="cyan--text">
                <v-icon left>
                    mdi-shield-sun 
                  </v-icon>
                  Defensa: {{pokemon.defensa}}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="orange--text">
                <v-icon left class="x-small">
                    mdi-alert-octagram-outline
                </v-icon>
                HP: {{pokemon.hp}}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="blue--text">
                <v-icon left class="x-small">
                    mdi-star-face
                </v-icon>
                Especial: {{pokemon.especial}}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="pink--text">
                <v-icon left class="x-small">
                    mdi-star-settings
                </v-icon>
                Exp: {{pokemon.experiencia}}
                </v-list-item-subtitle>
            </v-alert>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
    <v-img :src="pokemon.imgJuego" max-width="80"></v-img>
    <router-link to="/home" class="purple--text">Regresar</router-link>
  </v-card>
      </v-col>




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

<style  lang="scss" src="../scss/main.scss">

</style>
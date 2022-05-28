<template>
  
 <div>

  <!-- CONTAINER SELEC TIPO POKEMON -->
  <v-container>
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage">
       </loading>

    <v-row
    >
      <!-- SELECT DE POLEMONES -->
      <v-col md="4" offset-md="4">
        <v-card
          class="pa-2"
          
          :dark="darkMode"
        >
        <v-select
            :items="tipos"
            label="Selector pokemones"
            outlined
         >
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
                @click="byType(item.url)"
              >
                <v-list-item-title
                  :id="item.url"
                  v-text="item.name"
                ></v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-card>
      </v-col>
      <v-col
        md="4"
        offset-md="4"
      >
      </v-col>
    </v-row>

  </v-container>

    <v-row >
      <v-col
        cols="12"
        sm="6"
        md="9"
      >
        <!-- .COLUMNAS  -->
        <v-row>
          <CardPokemon v-for="(item, index) in pokemones" :key="index" :text="`texto propiedad○ ${index}`" :url="`${item.pokemon.url}`"/>
        </v-row>
 
      </v-col>
        <!-- <Pokedex /> -->
      <Pokedex v-on:evtClear="doRefreshPoke"/>
    </v-row>
</div>



</template>

<script>
import axios from 'axios'
//Import for loaders
import Loading from 'vue-loading-overlay';
import CardPokemon from '../components/CardPokemon.vue'
import Pokedex from '../components/Pokedex.vue';

import 'vue-loading-overlay/dist/vue-loading.css';
import { mapState } from 'vuex';




export default {
    components:{
    Loading,
    CardPokemon,
    Pokedex
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
      async getPokemones(){
        this.isLoading = true;
        let datos = await axios.get( process.env.VUE_APP_SERVICE_URL)
        // console.log(datos.results)
        this.pokemones = datos.results
        this.isLoading = false;
      },
      async getTypes(){
          let types = await axios.get( process.env.VUE_APP_SERVICE_URL_TYPES )
          this.tipos = types.data.results
      },
      async byType(id){
          this.pokemones = []
          this.isLoading = true;
          let type = await axios.get(id)
          this.pokemones = type.data.pokemon
          this.isLoading = false

      },
      onCancel() {
        console.log('User cancelled the loader.')
      },
      doRefreshPoke(){
        this.getPokeRefresh();
      },
      async getPokeRefresh(){
        this.pokemones=[]
        this.isLoading = true;
        var randomType = Math.floor((Math.random() * 9) + 1);
        let datos = await axios.get(process.env.VUE_APP_SERVICE_URL_TYPES + randomType)
        this.pokemones = datos.data.pokemon
        this.isLoading = false;
      },

  },
  computed:{
      ...mapState(['darkMode','refresh']),
  },
  name:'Panel',
  created () {
      this.getTypes()
    //   this.getPokemones()
  },

}
</script>

<style>

</style>
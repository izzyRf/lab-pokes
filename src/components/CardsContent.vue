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
      class="mb-6"
      no-gutters
    >
      <!-- SELECT DE POLEMONES -->
      <v-col md="4" offset-md="4">
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-select
            :items="tipos"
            label="Tipo"
         >
             <template v-slot:item="{ item, attrs, on }">
               <v-list-item
                 v-bind="attrs"
                 v-on="on"
               >
                 <v-list-item-title
                   :id="item.url"
                   v-text="item.name"
                   @click="byType(item.url)"
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
      <!-- COLUMNA CARD -->
      <v-col
        md="3"
        lg="3"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="#26c6da"
        >
          POKEDEX
        </v-card>
      </v-col>
    </v-row>
  
</div>



</template>

<script>
import axios from 'axios'
//Import for loaders
import Loading from 'vue-loading-overlay';
import CardPokemon from '../components/CardPokemon.vue'

import 'vue-loading-overlay/dist/vue-loading.css';


export default {
    components:{
    Loading,
    CardPokemon
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
        let datos = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        // console.log(datos.results)
        this.pokemones = datos.results
        this.isLoading = false;
      },
      async getTypes(){
          
          let types = await axios.get('https://pokeapi.co/api/v2/type')
          this.tipos = types.data.results
      },
      async byType(id){
           //setTimeout(() => this.basketAddSuccess = false, 2000);
          this.pokemones = []
          console.log("consulta API: "+id)
          this.isLoading = true;

          let type = await axios.get(id)
          console.log("consulta type consultado: "+type.data.pokemon)
          this.pokemones = type.data.pokemon
          this.isLoading = false

      },
      onCancel() {
              console.log('User cancelled the loader.')
            }
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
<template>
  <v-col
        md="3"
        lg="3"
      >
        <v-card
    :loading="loading"
    class="pokedexFix"
    :dark="darkMode"
  >
    <!-- <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template> -->

    <v-img
      height="150"
      src="https://images.alphacoders.com/581/581224.jpg"
    ></v-img>

    <v-card-title class="nombrePokedex">Pokedex</v-card-title>

    <v-card-text>
    <v-data-table :headers="headers" :items="pokedex" :items-per-page="10">
        <template v-slot:item="row">
            <tr>
              <td>{{row.item.name}}</td>
              <td>{{row.item.habilidad}}</td>
              <td>
                  <v-btn class="mx-2" fab dark small color="red" @click="deletePoke(row.item.id)">
                      <v-icon >mdi-delete-circle-outline</v-icon>
                  </v-btn>
              </td>
            </tr>
        </template>
    </v-data-table>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="ml-2 mt-1 centerTitulo">
              <v-btn
                class="ml-2 mt-1"
                outlined
                small
                color="red"
                @click="clearPokedex"
              >
                <v-icon >mdi-eraser</v-icon>Limpiar pokedex
              </v-btn>
              <v-btn
                class="ml-2 mt-1"
                outlined
                small
                color="blue"

              >
                <v-icon >mdi-eye-outline</v-icon>recargar Seleccion
              </v-btn>
    </v-card-actions>
    

    <!-- <v-card-title>Limpiar</v-card-title>
    <v-btn
  color="accent"
  elevation="7"
  large
  outlined
  rounded
  small
></v-btn> -->

   

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Limpiar
      </v-btn>
    </v-card-actions>
  </v-card>

    </v-col>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
        loading: false,
        selection: 1,
        headers: [
          { text: 'Nombre', value: 'name' },
          { text: 'Habilidad', value: 'ability' },
          { text: 'Accion', value: 'action' }
        ],
        pokemones: [
          {
            name: 'charizards',
            ability: 'text',
            action: ``
          },
          {
            name: 'pikachus',
            ability: 'poder ',
            action: 6.0
          },
        ],
    }
  },
  methods: {
    reserve () {
      //clear pokex
    },
    deletePoke(id){
        console.log("elimina poke idd:"+id)
        this.deletePokemon({id:id})
    },
    clearPokedex(){
        this.clearPokedex()
    },
    
    ...mapActions(['deletePokemon','clearPokedex'])
    
    
  },
  computed:{
      ...mapState(['pokedex','darkMode'])
  },

}
</script>

<style>

</style>
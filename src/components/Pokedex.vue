<template>
  <v-col
        md="3"
        lg="3"
      >
        <v-card
    :loading="loading"
    class="pokedexFix"
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

    <v-card-title>Pokedex</v-card-title>

    <v-card-text>
       <v-data-table
    :headers="headers"
    :items="pokemones"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Agregar</v-card-title>

    <v-card-text>
        <h3>pokedex</h3>
      {{pokedex}}
    </v-card-text>

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
            action: 6.0
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
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    
    
  },
  computed:{
      ...mapState(['pokedex'])
  },

}
</script>

<style>

</style>
<template>
  <div>
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
        <v-icon>mdi-pokeball</v-icon>
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
        <v-card v-if="i === 1" dark>
          <!-- <v-card-text>{{ text }}</v-card-text> -->
          <div v-if="existeUser">
              

               <v-card
              
               >
                <v-card-text>
                  <v-row align="center">
                    <v-col
                      class="text-h2 "
                      cols="12"
                    >
                    <Parallax 
                      :altura="'450'" 
                      :fuente="'https://cdn.wallpapersafari.com/2/92/IMu3sa.jpg'"
                      :texto="'Ya ingresaste a tu pokedex'"
                     
                    />

                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
          </div>
          <div v-else>
             <Registro/>
          </div>
        </v-card >
        <v-card dark v-if="i === 2">
          <Acceso/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>


    <v-container >
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
      
      <br><br><br>
      
      </v-col>
    </v-row>
  </v-container>
   <v-container >
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
      
      <br><br><br>
      
      </v-col>
    </v-row>
  </v-container>



  </div>
</template>

<script>


  import Registro from '../components/Register.vue'
  import Parallax from '../components/Parallax.vue'
  import Acceso from '../components/Access.vue'
  import NavBar from '../components/NavBar.vue'
  import { mapGetters } from 'vuex'

export default {
 data () {
      return {
         tab: null,
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
},
components: {
      Registro,
      Parallax,
      Acceso,
      NavBar,
      
    },
    computed:{
      ...mapGetters(['existeUser'])
    }
}
</script>

<style>

</style>
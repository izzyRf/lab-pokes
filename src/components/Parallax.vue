<template>
   <v-row>
      <v-col
        cols="12"
      >
        <v-parallax
            :height="altura"
            :src="fuente"
        >
        <v-row
            justify="center"
        >
            <v-col
                class="text-center"
                cols="12"
            >
        <h1 class="text-h4 font-weight-thin mb-4">
          Pokemon
        </h1>
        <h4 class="subheading">
          Registrate para conocer más!
        </h4>
            </v-col>
        </v-row>
        </v-parallax>
      </v-col>
    </v-row>
</template>

<script>
export default {
    props:{
        altura: String,
        fuente:String
    }
}
</script>

<style>

</style>
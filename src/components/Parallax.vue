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
       
        <h4 class="subheading">
          {{texto}}
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
        fuente:String,
        texto: String
    }
}
</script>

<style>

</style>
<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column justify-center" v-if="!$vuetify.display.mobile" cols="12" sm="6">
        <p>Hola, soy</p>
        <h1>Yeray Jiménez</h1>
        <h3>🚀Construyo cosas para web.</h3>
        <v-btn class="mt-4 w-50" rounded="lg" variant="outlined" size="x-large" color="primary">
          Ver Proyectos!
        </v-btn>
      </v-col>
      <v-col class="d-flex flex-column align-center" cols="12" sm="6">
        <img id="avatar" width="400" src="../assets/Avatar portfolio web.png" alt="Avatar">
      </v-col>
      <v-col class="d-flex flex-column align-center justify-center" v-if="$vuetify.display.mobile" cols="12" sm="6">
        <p>Hola, soy</p>
        <h1>Yeray Jiménez</h1>
        <h3>🚀Construyo cosas para web.</h3>
        <v-btn class="mt-4" rounded="lg" variant="outlined" size="x-large" color="primary">
          Ver Proyectos!
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="my-5 mx-2">
      <h4 class="d-flex">
        <p class="text-primary">I.</p>
        <p class="font-weight-light">Sobre mí</p>
      </h4>
      <v-col class="d-flex flex-column justify-center" cols="12" sm="6">

      </v-col>
      <v-col class="d-flex flex-column align-center" cols="12" sm="6">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    msg: 'yeray'
  }),
}
</script>

<style>
#avatar {
  filter: grayscale();
  transition: 0.3s;
}

#avatar:hover {
  filter: none;
  transition: 0.3s;
}
</style>
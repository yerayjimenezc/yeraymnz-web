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
      <v-row class="my-5 mx-2">
        <h4 class="d-flex">
          <p class="text-primary">I.</p>
          <p class="font-weight-light">Sobre mí</p>
        </h4>
      </v-row>
      <v-row class="my-5 mx-2">
        <v-col class="d-flex flex-column justify-center font-weight-thin" cols="12" sm="6">
          <p>Hola soy Yeray Jiménez, estudie una Ingenieria en Diseño Industrial, pero mi pasión es el desarrollo web.
          </p>
          <p>Mi interés en el desarrollo web comenzó en 2020 cuando decidí realizar una serie de cursos centrados en la
            base de la web HTML & CSS, En 2021 decidi redireccionar mi carrera profesional hacia el sector de la
            programación y realize una especialización en FullStack (Angular) para poder entender todas las partes que
            componen una web. Recientemente he finalizado otro curso en especialización FrontEnd estableciendo base
            solidas de Javascript Vanilla y manejo del DOM, para posteriormente consolidar conocimientos con VUE, Nuxt y
            Vuetify. Actualmente estoy aumentando mis conocimientos a traves de proyectos.
          </p>
          <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
        </v-col>
        <v-col class="d-flex flex-column align-center" cols="12" sm="6">
          <v-card color="primary">
            hola
          </v-card>
        </v-col>
      </v-row>
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
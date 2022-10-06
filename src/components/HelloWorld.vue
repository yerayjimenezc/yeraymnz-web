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
      <v-row id="sobre-mi" class="mt-5 mx-2">
        <h4 class="d-flex mx-2">
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
          <v-col class="px-0">
            <v-chip class="ma-1" v-for="i in tech" variant='outlined' color="primary">{{i}}</v-chip>
          </v-col>
        </v-col>
        <v-col class="d-flex flex-column align-center" cols="12" sm="6">
          <v-card class="w-100">
            <v-card-title>Educación</v-card-title>
            <v-expansion-panels>
              <v-expansion-panel v-for="i in items" :key="i">
                <v-expansion-panel-title>
                  {{i.title}}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{i.description}}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: [Example],
  data: () => ({
    msg: 'yeray',
    items: [
      {
        title: '2020 - Grado en Ingeniería en Diseño Industrial',
        description: 'Universidas de Las Palmas de Gran Canaria'
      },
      {
        title: '2020 - Bases en HTML, CSS, Accesibilidad Web, UX, Marketing Online y CMS Wordpress',
        description: 'Escuela de Organización Industrial'
      },
      {
        title: '2020 - Programa Especialización en Programación FullStack',
        description: 'Escuela de Organización Industrial'
      },
      {
        title: '2022 - Especialización en Desarrollo web Front-End',
        description: 'Reboot Academy'
      }
    ],
    tech: ['Javascript', 'Vue', 'Node.js', 'Express.js', 'Nuxt', 'WordPress']
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
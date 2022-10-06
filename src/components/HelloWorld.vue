<template>
  <v-container>
    <v-row>
      <v-col class="ps-0" v-if="!$vuetify.display.mobile" cols="1">
        <div class="wrapper-left d-flex flex-column align-center">
          <div class="wrapper-icons d-flex flex-column align-start pa-0">
            <v-btn class="font-weight-thin pa-0" elevation="0" color="transparent" icon="mdi-github"
              href="https://github.com/yerayjimenezc">
            </v-btn>
            <v-btn class="font-weight-thin pa-0" elevation="0" color="transparent" icon="mdi-linkedin"
              href="https://www.linkedin.com/in/yeray-jimenez/">
            </v-btn>
          </div>
          <div class="vl"></div>
        </div>
      </v-col>
      <v-col>
        <v-row>
          <v-col class="d-flex flex-column justify-center pa-5" v-if="!$vuetify.display.mobile" cols="12" md="6">
            <p class="font-weight-thin">Hola, soy</p>
            <h1>Yeray Jiménez</h1>
            <h3>🚀Construyo cosas para web.</h3>
            <v-btn class="mt-4 w-50" rounded="lg" variant="outlined" size="x-large" color="primary">
              Ver Proyectos!
            </v-btn>
          </v-col>
          <v-col class="d-flex flex-column align-center" cols="12" md="6">
            <img id="avatar" width="400" src="../assets/avatar-yeray.png" alt="Avatar">
          </v-col>
          <v-col class="d-flex flex-column align-center justify-center" v-if="$vuetify.display.mobile" cols="12" md="6">
            <p>Hola, soy</p>
            <h1>Yeray Jiménez</h1>
            <h3>🚀Construyo cosas para web.</h3>
            <v-btn href="#proyectos" class="mt-4" rounded="lg" variant="outlined" size="x-large" color="primary">
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
            <v-col id="text-me" class="d-flex flex-column justify-center font-weight-thin" cols="12" md="6">
              <p class="">Hola soy Yeray Jiménez, estudie una Ingenieria en Diseño Industrial, pero mi pasión es el
                desarrollo web.
              </p>
              <p class="pt-5">Mi interés en el desarrollo web comenzó en 2020 cuando decidí realizar una serie de cursos
                centrados en la base de la web HTML & CSS, En 2021 decidi redireccionar mi carrera profesional hacia el
                sector de la programación y realize una especialización en FullStack (Angular) para poder entender todas
                las
                partes que componen una web. Recientemente he finalizado otro curso en especialización FrontEnd
                estableciendo base solida de Javascript Vanilla y manejo del DOM, para posteriormente consolidar
                conocimientos con VUE, Nuxt y Vuetify. Actualmente estoy aumentando mis conocimientos a traves de
                proyectos.
              </p>
              <p class="pt-5">Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
              <v-col class="px-0">
                <v-chip class="ma-1" v-for="i in tech" variant='outlined' color="primary">{{i}}</v-chip>
              </v-col>
            </v-col>
            <v-col class="d-flex flex-column align-center" cols="12" md="6">
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
        <v-row class="my-5 mx-2">
          <v-row id="proyectos" class="mt-5 mx-2 w-100">
            <h4 class="d-flex mx-2">
              <p class="text-primary">V.</p>
              <p class="font-weight-light">Proyectos</p>
            </h4>
          </v-row>
          <v-row class="my-5 mx-2 wrapper-pro">
            <v-col cols="12" md="5">
              <img id="img-project" src="../assets/mockup-mobile-vuefilms.png" alt="">
            </v-col>
            <v-col class="mt-5" cols="12" md="7">
              <v-card elevation="0" class="text-end" color="transparent">
                <v-card-title>{{project[0].name}}</v-card-title>
                <div class="text-wrapper pa-5 elevation-5 rounded-lg">
                  {{project[0].description}}
                </div>
                <v-chip class="mt-2 me-1" size="x-small" v-for="i in project[0].techs" color="white">{{i}}
                </v-chip>
                <v-row class="pa-2 d-flex justify-end">
                  <v-btn elevation="0" color="transparent" icon="mdi-github" :href="project[0].urlGitHub"></v-btn>
                  <v-btn elevation="0" color="transparent" icon="mdi-palette-advanced" :href="project[0].urlFigma">
                  </v-btn>
                  <v-btn elevation="0" color="transparent" icon="mdi-web" :href="project[0].url"></v-btn>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="my-5 mx-2 wrapper-pro-2">
            <v-col class="mt-5" cols="12" md="7">
              <v-col class="d-flex justify-end" cols="12" md="5">
                <img v-if="$vuetify.display.mobile" id="img-project" src="../assets/img-exquizzite-mobile.png" alt="">
              </v-col>
              <v-card elevation="0" class="" color="transparent">
                <v-card-title>{{project[1].name}}</v-card-title>
                <div class="text-wrapper pa-5 elevation-5 rounded-lg">
                  {{project[1].description}}
                </div>
                <v-chip class="mt-2 me-1" size="x-small" v-for="i in project[1].techs" color="white">{{i}}
                </v-chip>
                <v-row class="pa-2 d-flex">
                  <v-btn elevation="0" color="transparent" icon="mdi-github" :href="project[1].urlGitHub"></v-btn>
                  <v-btn elevation="0" color="transparent" icon="mdi-palette-advanced" :href="project[1].urlFigma">
                  </v-btn>
                  <v-btn elevation="0" color="transparent" icon="mdi-web" :href="project[1].url"></v-btn>
                </v-row>
              </v-card>
            </v-col>
            <v-col class="d-flex justify-end" cols="12" md="5">
              <img v-if="!$vuetify.display.mobile" id="img-project" src="../assets/img-exquizzite-mobile.png" alt="">
            </v-col>
          </v-row>
        </v-row>
        <v-row class="my-5 mx-2">
          <v-row id="contacto" class="mt-5 mx-2 w-100">
            <h4 class="d-flex mx-2">
              <p class="text-primary">X.</p>
              <p class="font-weight-light">Contacto</p>
            </h4>
          </v-row>
          <v-row class="mt-5 mx-2 w-100 pa-2">
            <v-col>
              <v-row class="w-100 pa-3">
                <p>
                  Gracias por visitarme, actualmente estoy buscando unirme a un nuevo equipo de desarrolladores. Si
                  crees
                  que
                  podemos encajar bien, envíame un <a class="link-email" href="mailto:hola@yeramnz.dev">email📨.</a>
                </p>
                <p class="mt-5 w-100">
                  ¡No seas un extraño! 👋
                </p>
              </v-row>
              <v-row class="w-100 mt-1">
                <v-btn class="font-weight-thin" elevation="0" color="transparent" prepend-icon="mdi-github"
                  href="https://github.com/yerayjimenezc">
                  @yerayjimenezc
                </v-btn>
                <v-btn class="font-weight-thin" elevation="0" color="transparent" prepend-icon="mdi-linkedin"
                  href="https://www.linkedin.com/in/yeray-jimenez/">
                  Yeray Jiménez</v-btn>
              </v-row>
              <v-row class="w-100 mt-5 d-flex justify-center">
                <p class="mt-5 font-weight-thin">Diseñado & construido por <strong>Yeray jiménez.</strong></p>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
      <v-col class="pe-0 d-flex justify-end" v-if="!$vuetify.display.mobile" cols="1">
        <div class="wrapper-left d-flex flex-column align-center">
          <div class="wrapper-icons d-flex flex-column align-end pa-0">
            <p class="vertical-text ps-5">hola@yeramnz.com</p>
          </div>
          <div class="vl"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
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
    tech: ['Javascript', 'Vue', 'Node.js', 'Express.js', 'Nuxt', 'WordPress'],
    project:
      [{
        name: 'VueFimls',
        description: 'VueFimls nace bajo la idea de simplificar la busqueda de peliculas, consultar información basica, trailer y lo más importante en que plataforma esta disponible. pudiendo almacenar peliculas pendientes de ver en una lista personal.',
        techs: ['Vue', 'Node.js', 'Express.js', 'Nuxt', 'Vuetify', 'MongoDB', 'API'],
        urlFigma: 'https://www.figma.com/file/6tKhupBMFk4wCEQHf70IZi/VueFilms',
        urlGitHub: 'https://github.com/VueFilms/VueFilms-Front',
        url: 'https://vuefilms.netlify.app/',
      },
      {
        name: 'Exquizzite',
        description: 'Exquizzite es una aplicación de preguntas estilo Trivial, donde podras establecer una sala de preguntas con categorias, tipos de preguntas y  numero de las mismas, para poder juagar con tus amigos.',
        techs: ['Vite', 'Javascript Vanilla', 'Bootstrap', 'API'],
        urlFigma: 'https://www.figma.com/file/6tKhupBMFk4wCEQHf70IZi/VueFilms',
        urlGitHub: 'https://github.com/VueFilms/VueFilms-Front',
        url: 'https://vuefilms.netlify.app/',
      }]

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

#img-project {
  width: 75%;
}

.wrapper-left {
  position: -webkit-sticky;
  position: fixed;
  bottom: 0;
  opacity: 0.6;
}

.vl {
  border-left: 1px solid white;
  width: 5%;
  height: 50vh;
}

.vertical-text {
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: unset;
}

.wrapper-pro {
  height: auto;
  background-image: url('../assets/bgimgvuefilms.png');
  transition: 0.5s;
  background-repeat: no-repeat;
  background-size: 75%;
}

.wrapper-pro-2 {
  height: auto;
  background-image: url('../assets/bgimg-exquizzite.png');
  background-position: right top;
  transition: 0.5s;
  background-repeat: no-repeat;
  background-size: 75%;
}

.text-wrapper {
  background-color: #2F2F4D;
  font-weight: 100;
  font-size: 0.7em;
}

.link-email {
  font-weight: bolder;
  color: white;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .wrapper-pro {
    background-size: 100%;
  }

  .wrapper-pro-2 {
    background-size: 100%;
  }

  #img-project {
    width: 25%;
  }
}
</style>

<template>
  <v-app dark>
    <v-layout>
      <v-app-bar>
        <v-container class="d-flex">
          <v-col v-if="$vuetify.display.mobile" cols="1">
            <v-btn @click.stop="drawer = !drawer" icon="mdi-dots-vertical"></v-btn>
          </v-col>
          <v-spacer v-if="$vuetify.display.mobile" />
          <v-app-bar-title class="d-flex ma-0 align-center"><a href="#"><img src="./assets/logoMNZ.svg" width="50"></a>
          </v-app-bar-title>
          <v-spacer />
          <v-col cols="1" v-if="$vuetify.display.mobile">
          </v-col>
          <v-col v-if="!$vuetify.display.mobile">
            <ul class="d-flex justify-end">
              <li class="ms-3">
                <a href="#sobre-mi">
                  <v-icon>mdi-alpha-i</v-icon>Sobre mí
                </a>
              </li>
              <li class="ms-3">
                <a href="#proyectos">
                  <v-icon>mdi-alpha-v</v-icon>Proyectos
                </a>
              </li>
              <li class="ms-3">
                <a href="#contacto">
                  <v-icon>mdi-alpha-x</v-icon>Contacto
                </a>
              </li>
            </ul>
          </v-col>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer color="grey-darken-2" v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-alpha-i" title="Sobre mí" href="#sobre-mi"></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-v" title="Proyectos" href="#proyectos"></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-x" title="Contacto" href="#contacto"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="d-flex justify-center">
        <v-col cols="12" md="9">
          <HelloWorld />
        </v-col>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    drawer: false
  })
}
</script>

<style>
li {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Bitter', serif;
}

#navbarlist {
  list-style: none;
}

li {
  text-decoration: none;
}
</style>

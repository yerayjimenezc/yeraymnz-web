<template>
  <v-app dark>
    <v-layout>
      <v-app-bar>
        <v-col v-if="$vuetify.display.mobile" cols="1">
          <v-btn @click.stop="drawer = !drawer" icon="mdi-dots-vertical"></v-btn>
        </v-col>
        <v-spacer v-if="$vuetify.display.mobile" />
        <v-app-bar-title class="d-flex ma-0 justify-center"><img src="./assets/logoMNZ.svg" width="50">
        </v-app-bar-title>
        <v-spacer />
        <v-col cols="1" v-if="$vuetify.display.mobile">
        </v-col>
        <v-col v-if="!$vuetify.display.mobile">
          <v-list class="d-flex" density="compact" nav>
            <v-list-item prepend-icon="mdi-alpha-i" title="Sobre mí" value="#"></v-list-item>
            <v-list-item prepend-icon="mdi-alpha-v" title="Proyectos" value="#"></v-list-item>
            <v-list-item prepend-icon="mdi-alpha-x" title="Contacto" value="#"></v-list-item>
          </v-list>
        </v-col>
      </v-app-bar>
      <v-navigation-drawer color="grey-darken-2" v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-alpha-i" title="Sobre mí" value="#"></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-v" title="Proyectos" value="#"></v-list-item>
          <v-list-item prepend-icon="mdi-alpha-x" title="Contacto" value="#"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <HelloWorld />
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

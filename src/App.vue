<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary"></v-app-bar>
      <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
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
    //
  }),
}
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <h1>Soy el componente hijo, {{msg}}</h1>
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

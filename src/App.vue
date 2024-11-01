<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
.main{
  background: linear-gradient(90deg, rgba(227,238,238,1) 0%, rgba(207,232,238,1) 100%, rgba(229,234,236,1) 100%, rgba(240,239,239,1) 100%);
}
</style>

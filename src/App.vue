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
  /* background-color: #d6e2e9   ; */
  background: linear-gradient(90deg, rgb(234, 245, 245) 0%, rgb(215, 244, 250) 100%, rgba(229,234,236,1) 100%, rgba(240,239,239,1) 100%);
}
</style>

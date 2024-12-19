<template>
  <v-app-bar>
    <v-toolbar-title>Rakesh</v-toolbar-title>
    <router-link to="/homepage">
      <v-btn text class="hover-blue" color="black">Home</v-btn>
    </router-link>
    <router-link to="/Serivice">
      <v-btn text class="hover-blue" color="black">Service</v-btn>
    </router-link>
    <router-link to="/project">
      <v-btn text class="hover-blue" color="black">Project</v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn text class="hover-blue" color="black">About Me</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style scoped>
.hover-blue:hover {
  color: blue !important; /* Set the text color to blue on hover */
}
</style>

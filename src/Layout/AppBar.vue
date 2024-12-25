<template>
  <v-app-bar>
    <v-toolbar-title>Rakesh</v-toolbar-title>
    <router-link to="/homepage">
      <v-btn text class="hover-blue" color="black">Home</v-btn>
    </router-link>
    <router-link to="/Serivice">
      <v-btn text class="hover-blue" color="black">Service</v-btn>
    </router-link>
    <router-link to="/Experience">
      <v-btn text class="hover-blue" color="black">Experienc</v-btn>
    </router-link>
    <router-link to="/project">
      <!-- Apply the blinking class to the Project button -->
      <v-btn text class="hover-blue blink-btn" color="black">Project</v-btn>
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

/* Blinking effect for the Project button */
@keyframes blink-animation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.blink-btn {
  animation: blink-animation 1s infinite;
}
</style>

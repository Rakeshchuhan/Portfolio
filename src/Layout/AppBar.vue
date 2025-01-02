<template>
  <v-app-bar elevation="1">
    <v-toolbar-title class="text-indigo bb">Rakesh Chauhan</v-toolbar-title>
    <div class="scrollable-links">
      <router-link to="/homepage">
        <v-btn text class="hover-blue" color="black">Home</v-btn>
      </router-link>
      <router-link to="/Serivice">
        <v-btn text class="hover-blue" color="black">Service</v-btn>
      </router-link>
      <router-link to="/Experience">
        <v-btn text class="hover-blue" color="black">Experience</v-btn>
      </router-link>
      <router-link to="/project">
        <!-- Apply the blinking class to the Project button -->
        <v-btn text class="hover-blue blink-btn" color="black">Project</v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn text class="hover-blue" color="black">About Me</v-btn>
      </router-link>
    </div>
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
.bb {
  font-weight: bold;
  font-size: large;
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

/* Make the links scrollable */
.scrollable-links {
  display: flex;
  overflow-x: auto;
  gap: 16px; /* Space between buttons */
  padding: 8px;
  flex-wrap: nowrap;
}

.scrollable-links a {
  white-space: nowrap; /* Prevent the text from wrapping */
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .scrollable-links {
    padding: 4px; /* Adjust padding for mobile */
  }

  .v-btn {
    font-size: 14px; /* Make buttons smaller on mobile */
  }
}
</style>

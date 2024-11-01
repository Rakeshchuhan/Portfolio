<template>
  <!-- <AppBar /> -->
  <HomePage />
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import AppBar from "@/Layout/AppBar.vue";
import HomePage from '../components/HomePage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HomePage,
   
  },
});
</script>

<template>
  <AppBar />
  <v-container fluid >
      <!-- Page Heading -->
      <h1 class="text-center">Projects</h1>

      <!-- Tabs -->
      <v-tabs v-model="currentTab" background-color="primary" dark>
          <v-tab @click="currentTab = 'all'">All</v-tab>
          <v-tab @click="currentTab = 'latest'">Latest</v-tab>
          <v-tab @click="currentTab = 'login'">Login</v-tab>
      </v-tabs>

      <!-- Projects -->
      <v-row>
          <!-- Loop through the filtered cards -->
          <v-col v-for="(card, index) in filteredCards" :key="index" cols="12" md="6" class="d-flex justify-center">
              <v-card class="project-card" elevation="6" style="width: 100%; height: 400px; max-width: 700px;">
                  <v-img :src="card.image" height="325px" width="100%" cover></v-img>
                  <div class="overlay">
                      <v-card-text >{{ card.description }}</v-card-text>
                  </div>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  import AppBar from "@/Layout/AppBar.vue";
  import loginImage from "@/assets/image/login.png";
  import login2Image from "@/assets/image/login2.png";
  import formImage from "@/assets/image/form.png";
  import modulesImage from "@/assets/image/modules.png";
  import dsImage from "@/assets/image/ds.jpg";
  import oldImage from "@/assets/image/old-login-page.jpg";

  export default {
      components: {
          AppBar,
      },
      data() {
          return {
              currentTab: "all", // Default tab
              // Array of cards with multiple images for each card
              cards: [
                  {
                    
                      description: "Login Page",
                      image: loginImage, 
                      category: "login",
                  },
                  {
                      title: "Flutter Project",
                      description: "login page",
                      image: loginImage,  // Image for this card
                      date: "2024-06-01",
                      category: "latest",
                  },
                  {
                     
                      description: "Module",
                      image: modulesImage, // Image for this card
                      date: "2022-12-15",
                      category: "all",
                  },
                  // Add more cards here
                  {
                      title: "New Login Page",
                      description: "Login Module",
                      image: login2Image, // Image for this card
                      category: "login",
                  },
                  {
                      title: "New Login Page",
                      description: "Registrayiob Form Login Module",
                      image: formImage, // Image for this card
                      category: "login",
                  },
                  {
                      title: "React Project",
                      description: "React Latest Module",
                      image: dsImage, // Image for this card
                      date: "2024-07-01",
                      category: "latest",
                  },
                  {
                      title: "Old React Page",
                      description: "Old React Module",
                      image: oldImage, // Image for this card
                      date: "2021-10-15",
                      category: "all",
                  },
              ],
          };
      },
      computed: {
          filteredCards() {
              if (this.currentTab === "all") {
                  return this.cards;
              }
              return this.cards.filter((card) => card.category === this.currentTab);
          },
      },
  };
</script>

<style scoped>
  .pro {
      height: 100vh;
  }

  .text-center {
      text-align: center;
      margin-top: 20px;
  }

  .project-card {
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 500px; /* Maximum width for each card */
      margin: 0 auto;
  }

  .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(235, 234, 234, 0.793); /* Overlay effect */
      padding: 12px;
      text-align: center;
      color: rgb(4, 4, 4);
  }
</style>

<template>
  <AppBar />
  <v-container fluid>
    <!-- Page Heading -->
    <h1 class="text-center">Projects</h1>

    <!-- Tabs -->
    <v-tabs v-model="currentTab" background-color="primary" dark>
      <v-tab
        @click="setTab('all')"
        :class="{ activeTab: currentTab === 'all' }"
      >
        All
      </v-tab>
      <v-tab
        @click="setTab('latest')"
        :class="{ activeTab: currentTab === 'latest' }"
      >
        Latest
      </v-tab>
      <v-tab
        @click="setTab('login')"
        :class="{ activeTab: currentTab === 'login' }"
      >
        Login
      </v-tab>
    </v-tabs>
    <br />

    <!-- Projects -->
    <v-row>
      <!-- Loop through the filtered cards -->
      <v-col
        v-for="(card, index) in filteredCards"
        :key="index"
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <v-card
          class="project-card"
          elevation="6"
          style="
            width: 100%;
            height: 400px;
            max-width: 700px;
            position: relative;
          "
        >
          <v-img
            :src="card.image"
            height="320px"
            width="100%"
            class="responsive-img"
          ></v-img>
          <div class="overlay">
            <v-card-text>{{ card.description }}</v-card-text>
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
import profileImage from "@/assets/image/profile.png";
import formsImage from "@/assets/image/forms.png";
import expertabImage from "@/assets/image/expertab.png";
import gspImage from "@/assets/image/gsp.jpeg";
import gsptableImage from "@/assets/image/gsptable.jpeg";
import form3Image from "@/assets/image/form3.jpeg";
import card from "@/assets/image/card.jpeg";
import cardsscrm from "@/assets/image/cardsscrm.jpeg";
import edit from "@/assets/image/edit.jpeg";
import edit1 from "@/assets/image/edit1.jpeg";
import edit3 from "@/assets/image/edit3.jpeg";
import edit4 from "@/assets/image/edit4.jpeg";
import edit5 from "@/assets/image/edit5.jpeg";
import edit6 from "@/assets/image/edit6.jpeg";
import delete1 from "@/assets/image/delete.jpeg";

export default {
  components: {
    AppBar,
  },
  data() {
    return {
      currentTab: "all",
      cards: [
        { description: "Login Page", image: loginImage, category: "login" },
        {
          description: "Module",
          image: modulesImage,
          date: "2022-12-15",
          category: "all",
        },
        {
          description: "Table",
          image: form3Image,
          date: "2022-12-15",
          category: "all",
        },
        {
          description: "Table",
          image: gspImage,
          date: "2022-12-15",
          category: "all",
        },
        {
          description: "Table",
          image: gsptableImage,
          date: "2022-12-15",
          category: "all",
        },
        {
          description: "Experienc Module",
          image: expertabImage,
          date: "2022-12-15",
          category: "all",
        },
        {
          description: "Form Module",
          image: formsImage,
          date: "2022-12-15",
          category: "all",
        },
        {
          description: "Photo Upload Module",
          image: profileImage,
          date: "2022-12-15",
          category: "all",
        },
        {
          title: "New Login Page",
          description: "Login Module",
          image: login2Image,
          category: "login",
        },
        {
          title: "New Login Page",
          description: "Register Form Login Module",
          image: formImage,
          category: "login",
        },
        {
          title: "Login Page",
          description: "Login page Module",
          image: loginImage,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Edit Dialogbox Module",
          image: edit,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Delete Dialogbox Module",
          image: delete1,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Edit Dialogbox Module",
          image: edit1,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Edit Dialogbox Module",
          image: edit3,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Edit Dialogbox Module",
          image: edit5,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Edit Dialogbox Module",
          image: edit6,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Login Page",
          description: "Edit Dialogbox Module",
          image: edit4,
          date: "2024-07-01",
          category: "latest",
        },
        {
          title: "Crad",
          description: "Card Module",
          image: cardsscrm,
          date: "2024-07-01",
          category: "latest",
        },
        {
          description: "Multiple Card Module",
          image: card,
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
  methods: {
    setTab(tab) {
      this.currentTab = tab;
      localStorage.setItem("currentTab", tab); // Store the selected tab in localStorage
    },
  },
  mounted() {
    const savedTab = localStorage.getItem("currentTab");
    this.currentTab = savedTab ? savedTab : "all";
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-top: 20px;
}

.v-tab.activeTab {
  position: relative;
  color: blue;
}

.v-tab.activeTab::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #00bcd4;
  transition: width 0.3s ease;
}

@keyframes scaleInProjectCard {
  0% {
    transform: translateY(20px) scale(0.9); /* Start with a small size and slight downward translation */
    opacity: 0; /* Start with no opacity */
  }
  100% {
    transform: translateY(0) scale(1); /* End with normal size and position */
    opacity: 1; /* Full opacity */
  }
}

.project-card {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  animation: scaleInProjectCard 1s ease-out; /* Apply the animation */
}

.project-card:hover {
  transform: scale(1.05) translateY(-20px); /* Combined scale and translateY for hover effect */
  border: 5px solid #578586;
  box-shadow: 0 4px 20px rgba(96, 170, 172, 0.5);
  transition: transform 1s ease-in-out, box-shadow 0.8s, border 0.3s;
}


.overlay {
  position: absolute; /* Ensure it overlays the parent */
  bottom: 16px; /* Position near the bottom */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for horizontal centering */
  width: auto; /* Adjust width to fit the content */
  text-align: center; /* Center-align text */
}

.overlay v-card-text {
  background-color: rgba(0, 0, 0, 0.7); /* Black with 70% transparency */
  color: white; /* Text color */
  padding: 8px 12px; /* Space around text */
  border-radius: 8px; /* Rounded corners */
  display: inline-block; /* Shrinks to fit text width */
}

.responsive-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
@media (max-width: 600px) {
    .v-tab {
      display: none;
    }
  
    .project-card {
      width: 100%;
      margin: 0 0 10px 0;
      max-width: 100%;
    }
  }
</style>

<template>
  <AppBar />
  <v-container fluid class="pro">
    <h1 class="text-center">Projects</h1>
    
    <!-- Sort Option -->
    <v-row justify="center" class="my-4">
      <v-btn-toggle v-model="sortOrder" color="primary" dense>
        <v-btn value="latest">Latest</v-btn>
        <v-btn value="oldest">All</v-btn>
      </v-btn-toggle>
    </v-row>
    <br />
    
    <!-- Project Cards -->
    <v-row>
      <v-col v-for="project in sortedProjects" :key="project.id" cols="12" md="4">
        <v-card 
          class="project-card" 
          hover 
          :style="{ backgroundImage: `url(${project.image})` }"
        >
          <!-- Overlay for Text Readability -->
          <div class="overlay">
            <v-card-title class="white--text">{{ project.title }}</v-card-title>
            <v-card-subtitle class="white--text">{{ project.date }}</v-card-subtitle>
            <v-card-text class="white--text">{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="white" text>View Project</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppBar from "@/Layout/AppBar.vue";

export default {
  components: {
    AppBar,
  },
  name: "Project",
  data() {
    return {
      sortOrder: "latest",
      projects: [
        {
          id: 1,
          title: "Login Page ",
          date: "2023-09-15",
          description: "Create a new project",
          image: "https://media.istockphoto.com/id/1071047018/vector/login-form-user-interface-vector.jpg?s=612x612&w=0&k=20&c=111C1SLafMRbYr-K_FdU31uk_ybUc8QleVxGaRP2I8Y="
        
        },
        {
          id: 2,
          title: "Project 2",
          date: "2023-06-10",
          description: "Description of Project 2",
          image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 3,
          title: "Flutter Project",
          date: "2022-12-05",
          description: "Create Module",
          image: "https://images.pexels.com/photos/20694602/pexels-photo-20694602/free-photo-of-close-up-of-a-smartphone-screen-displaying-a-python-code.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        // Add more projects as needed
      ],
    };
  },
  computed: {
    sortedProjects() {
      return this.sortOrder === "latest"
        ? this.projects.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
        : this.projects.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  }
};
</script>

<style scoped>
.pro {
  height: 90vh;
  /* background: linear-gradient(90deg, rgba(227, 238, 238, 1) 0%, rgba(207, 232, 238, 1) 100%); */
}

.text-center {
  text-align: center;
  margin-top: 20px;
}

.project-card {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 4px 20px rgba(1, 131, 178, 0.712);
}

.overlay {
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

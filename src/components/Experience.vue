<template>
    <AppBar />
    <div class="py-10">
      <h1 class="text-center mb-6 text-h3 font-weight-bold">Experience ( 1.7 Year)</h1>
  
      <!-- EduPlusCampus Experience Section -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="experience-item">
              <div class="icon-container">
                <img src="https://www.edupluscampus.com/img/logos/logo.png" alt="Flutter Logo" width="40" />
              </div>
              <div class="experience-details">
                <h3 class="font-weight-bold">FullStack Developer at EduPlusCampus</h3>
                <p class="text-subtitle-1 text-primary">May 2023 - Present</p>
                <p class="text-body-1">
                    Contributed to the development of ERP software tailored for the education sector, utilizing Vue.js for frontend functionality.
                </p>
                <p class="text-body-1 mt-3">
                    Handled live project issues, promptly resolving errors within tight deadlines while ensuring smooth user experience.
                </p>
                <p class="text-body-1 mt-3">
                    Collaborated with clients to gather requirements, implementing them effectively, and developed UI Designs based on wireframes.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
  
        <!-- Vue.js Specialization Section -->
        <v-row>
          <v-col cols="12">
            <div class="experience-item">
              <div class="icon-container">
                <v-icon large color="success">mdi-vuejs</v-icon>
              </div>
              <div class="experience-details">
                <h3 class="font-weight-bold">Frontend Developer (Specializing in Vue.js)</h3>
                <p class="text-body-1">
                    <b>Vue.js Expertise: 90% </b><br>
                    Proficient in creating scalable and efficient single-page applications (SPA) using Vue.js and Vue Router.
                </p>
                <v-divider class="mt-3"></v-divider>
                <p class="text-body-1 mt-3">
                    <b>Responsive Design: 85%</b><br>
                    Skilled in creating mobile-first designs and ensuring seamless user experiences across devices using Vuetify, BootstrapVue, and custom CSS.
                </p>
                <v-divider class="mt-3"></v-divider>
                <p class="text-body-1 mt-3">
                    <b>Validation & Regular Expressions: 80%</b><br>
                    Experienced in implementing complex form validations using JavaScript and regular expressions.
                </p>
                <v-divider class="mt-3"></v-divider>
                <p class="text-body-1 mt-3">
                    <b>API Integration: 85%</b><br>
                    Expertise in integrating RESTful APIs using Axios and managing state with Vuex.
                </p>
                <v-divider class="mt-3"></v-divider>
                <p class="text-body-1 mt-3">
                    <b>Debugging & Error Resolution: 90%</b><br>
                    Strong ability to debug, identify, and resolve issues, ensuring minimal downtime and optimal performance.
                </p>
                <v-divider class="mt-3"></v-divider>
                <p class="text-body-1 mt-3">
                    <b>Dependency Management: 80%</b><br>
                    Knowledge of npm and package management, ensuring proper dependency handling and version control.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
  
        <!-- Flutter Design and Development Skills Section -->
        <v-row>
          <v-col cols="12" >
            <v-card class="experience-item">
                <div class="icon-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ290zmtU2p4_rvA8WkGk2o0MmPdJuqmm7EA&s" alt="Flutter Logo" width="40" />
              </div>
              <div class="experience-details">
                <h3 class="font-weight-bold">Flutter</h3>
        
                <p  class="text-body-1 mt-3"><b>Responsive UI Design:</b> <br>Proficient in creating responsive and visually appealing UI designs using Flutter widgets like Container, Row, Column, Stack, etc.</p>
                 <v-divider class="mt-3"></v-divider>
                <p  class="text-body-1 mt-3"><b>State Management:</b><br> Expertise in working with Stateless and Stateful widgets for efficient UI/UX development and state management using Provider, Riverpod, and Bloc.</p>
                 <v-divider class="mt-3"></v-divider>
                <p  class="text-body-1 mt-3"><b>API Integration:</b><br> Integrated REST APIs seamlessly with Flutter using http and Dio packages.</p>
                 <v-divider class="mt-3"></v-divider>
                <p  class="text-body-1 mt-3"><b>Routing & Navigation:</b><br> Implemented dynamic routing with Navigator and onGenerateRoute for smooth navigation experiences.</p>
                 <v-divider class="mt-3"></v-divider>
                <p  class="text-body-1 mt-3"><b>Performance Optimization:</b><br> Enhanced application performance by optimizing build methods and reducing widget rebuilds.</p>
              
                 <v-divider class="mt-3"></v-divider>
          
              </div>
            </v-card>
          </v-col>
        </v-row>
  
        <!-- Key Achievements Section with Unique Design -->
        <v-row>
      <v-col cols="12">
        <v-card class="experience-item key-achievement-card">
          <div class="icon-container">
            <v-icon large color="yellow darken-3">mdi-trophy</v-icon>
          </div>
          <div class="experience-details">
            <h3 class="font-weight-bold">Key Achievements</h3>

            <p class="text-body-1 mt-3"><b>Task Delivery:</b> <br>Delivered 100% of tasks on time, ensuring high-quality deliverables in a fast-paced Agile environment.</p>
            <v-divider class="mt-3"></v-divider>
            <p class="text-body-1 mt-3"><b>API Optimization:</b> <br>Successfully integrated backend services with Vue.js frontend, optimizing API response times by up to 30%.</p>
            <v-divider class="mt-3"></v-divider>
            <p class="text-body-1 mt-3"><b>Mobile Responsiveness:</b><br> Enhanced mobile responsiveness across multiple projects, improving user satisfaction rates by 25%.</p>
            <v-divider class="mt-3"></v-divider>
            <p class="text-body-1 mt-3"><b>Bug-Free Deployment:</b><br> Reduced development errors by implementing thorough debugging techniques, achieving a 95% bug-free deployment rate.</p>
          </div>
        </v-card>
      </v-col>
    </v-row>

      </v-container>
    </div>
  </template>
  
  <script>
  import AppBar from "@/Layout/AppBar.vue";
  
  export default {
    components: {
      AppBar,
    },
  };
  </script>
  
  <style scoped>
  .experience-page {
    background-color: #f9f9f9;
  }
  
  .experience-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: scaleIn 0.8s ease-in-out;
    border-left: 5px solid #614caf;
  }
  
  .experience-item:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .icon-container {
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .experience-details h3 {
    margin-bottom: 8px;
  }
  
  .experience-details p {
    margin-bottom: 4px;
  }
  
  .text-primary {
    color: #4caf50;
  }
  
  .text-body-1 {
    font-size: 1rem;
    color: #333;
  }
  
  .key-achievement-card {
  background: linear-gradient(145deg, #fbbd08, #f79c42);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  color: #fff;
}

.key-achievement-card .icon-container v-icon {
  color: white;
}
  /* Animation for scaling and translating the experience items */
  @keyframes scaleIn {
    0% {
      transform: translateY(20px) scale(0.9);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  </style>
  
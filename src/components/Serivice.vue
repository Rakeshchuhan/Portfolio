<template>
  <AppBar />
  <v-container fluid class="ser">
    <h1 class="text-center">My <span color="primary">Service</span></h1>
    <v-row class="mt-10">
      <!-- Services Section -->
      <v-col cols="12" md="4">
        <v-card class="card">
          <v-icon class="service-icon web-icon">mdi-web</v-icon>
          <h3>Web Design</h3>
          <ul>
            <li>Responsive and mobile-first design</li>
            <li>Optimized performance and SEO</li>
            <li>Custom, modern UI layouts</li>
          </ul>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="card">
          <v-icon class="service-icon app-icon">mdi-cellphone</v-icon>
          <h3>App Development</h3>
          <ul>
            <li>Native and cross-platform solutions</li>
            <li>User-friendly and intuitive interfaces</li>
            <li>Optimized for high performance</li>
          </ul>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="card">
          <v-icon class="service-icon uiux-icon">mdi-palette</v-icon>
          <h3>UI/UX Design</h3>
          <ul>
            <li>User-centered design approach</li>
            <li>Prototyping and wireframing</li>
            <li>Usability testing and analysis</li>
          </ul>
        </v-card>
      </v-col>
      <v-divider class="mt-10"></v-divider>
    </v-row>
  
    <br />
    <br />
    <h1 class="text-center">My <span color="primary">Skill</span></h1>
    <!-- Skills Progress Section -->
    <v-row class="mt-10">
      <v-col cols="12" sm="6" v-for="skill in skills" :key="skill.name">
        <div class="skill-header">
          <h4>{{ skill.name }}</h4>
          <span class="percentage-text">{{ skill.percentage }}%</span>
        </div>
        <v-progress-linear
          :value="skill.percentage"
          height="5"
          :style="{ background: getMultiColorGradient(skill.percentage) }"
          color="transparent"
        ></v-progress-linear>
      </v-col>

      <!-- <v-col cols="12" sm="6" v-for="skill in circularSkills" :key="skill.name">
        <div class="circular-skill">
          <v-progress-circular
            :size="100"
            :width="10"
            :value="skill.percentage"
            :color="getCircularColor(skill.percentage)"
          >
            <span class="circular-text">{{ skill.percentage }}%</span>
          </v-progress-circular>
          <h4 class="text-center mt-2">{{ skill.name }}</h4>
        </div>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import AppBar from "@/Layout/AppBar.vue";

export default {
  components: {
    AppBar,
  },
  name: "services",
  data() {
    return {
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 },
        { name: "Vue.js", percentage: 80 },
        { name: "React.js", percentage: 40 },
        { name: "Flutter", percentage: 70 },
        { name: "Java", percentage: 65 },
      ],
      // circularSkills: [
      //   { name: "Team Work", percentage: 80 },
      //   { name: "Project Management", percentage: 75 },
      //   { name: "Creativity", percentage: 85 },
      //   { name: "Communication", percentage: 90 },
      // ],
    };
  },
  methods: {
    getMultiColorGradient(percentage) {
      return `linear-gradient(to right,
  #0039a6 0%,                    /* Blue color */
  #0039a6 ${percentage}%,        /* Blue up to the percentage */
  #e0e0e0 ${percentage}%,        /* White from percentage to 100% */
  #e0e0e0 100%                   /* White color */
)`;
    },
    // getCircularColor(percentage) {
    //   if (percentage >= 80) return "#4caf50"; // Green for high percentages
    //   if (percentage >= 60) return "#ffeb3b"; // Yellow for medium percentages
    //   return "#f44336"; // Red for lower percentages
    // },
  },
};
</script>

<style scoped>
.ser {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes scaleIn {
  0% {
    transform: translateY(20px) scale(0.9); /* Start with slightly smaller size and offset */
    opacity: 0; /* Start with no opacity */
  }
  100% {
    transform: translateY(0) scale(1); /* End at normal size with no offset */
    opacity: 1; /* Fully visible */
  }
}

.card {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  animation: scaleIn 0.6s ease-out; /* Apply the animation */
}

.card:hover {
  transform: translateY(-12px) scale(1.05); /* Hover effect with slight scaling and translation */
  box-shadow: 0 4px 20px rgba(1, 131, 178, 0.712);
}


.service-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.web-icon {
  color: #2196f3;
}

.app-icon {
  color: #4caf50;
}

.uiux-icon {
  color: #ff5722;
}

.card h3 {
  font-size: 24px;
  margin-top: 10px;
}

.card ul {
  font-size: 14px;
  text-align: left;
  padding-left: 0;
  list-style: none;
  margin-top: 10px;
}

.card ul li {
  margin-bottom: 8px;
}

.v-container {
  padding: 50px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.percentage-text {
  font-weight: bold;
  margin-left: 8px;
}
.circular-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

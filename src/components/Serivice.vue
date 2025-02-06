<template>
  <AppBar />
  <v-container fluid class="ser">
    <h1 class="text-center">My <span color="primary">Service</span></h1>
    <v-row class="mt-10">
      <!-- Services Section -->
      <v-col cols="12" sm="4" md="4">
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

      <v-col cols="12" sm="4" md="4">
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

      <v-col cols="12" sm="4" md="4">
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

      <v-divider class="mt-10"></v-divider>
    </v-row>
    <div class="text-center mt-10">
        <h1 >My <span color="primary">Tools</span></h1>
      <v-row class="mt-5 d-flex justify-center">
        <v-col
          cols="12"
          sm="4"
          md="2"
          v-for="tool in tools"
          :key="tool.name"
          class="text-center"
        >
        <v-img :src="tool.icon" class="tool-icon mb-3" />
          <h4>{{ tool.name }}</h4>
        </v-col>
      </v-row>
      </div>
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
      tools: [
        {
          name: "Visual Studio Code",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "IntelliJ IDEA",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/768px-IntelliJ_IDEA_Icon.svg.png",
        },
        {
          name: "XAMPP",
          icon: "https://images.seeklogo.com/logo-png/27/1/xampp-logo-png_seeklogo-274098.png?v=1957300462896250240",
        },
        {
          name: "Sourcetree",
          icon: "https://static-00.iconduck.com/assets.00/sourcetree-icon-1626x2048-87bhm33f.png",
        },
        {
          name: "Postman",
          icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        },
        {
          name: "GitHub",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/1024px-Ei-sc-github.svg.png",
        },
      ],
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
.tool-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
}
h4 {
  font-size: 16px;
  font-weight: bold;
}
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

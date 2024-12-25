<template>
    <AppBar />
    <div class="page-content">
      <v-container fluid>
        <h1 class="text-center mb-8">Education</h1>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-timeline dense>
              <v-timeline-item
                v-for="(item, index) in educationTimeline"
                :key="'edu-' + index"
                :color="item.color"
                fill-dot
              >
                <template v-slot:opposite>
                  <strong class="text-sm text-md">{{ item.year }}</strong>
                </template>
                <v-card outlined class="card-custom">
                  <v-card-title class="text-sm text-md bg-primary">
                    <!-- Dynamically add icon based on title -->
                    <v-icon class="mr-2">{{ getIconForTitle(item.title) }}</v-icon>
                    {{ item.title }}
                  </v-card-title>
                  <v-card-subtitle class="text-sm">{{ item.institution }}</v-card-subtitle>
                  <v-card-text class="text-xs text-sm">{{ item.description }}</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
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
    data() {
      return {
        educationTimeline: [
          {
            title: "BE in Electrical Engineering",
            description: "Dattakala Group of Institute of Technology",
            institution: "2020",
            year: 2020,
            color: "purple-lighten-2",
          },
          {
            title: "Diploma in Electrical Engineering",
            description: "Dattakala Polytechnic",
            institution: "2027",
            year: 2017,
            color: "amber-lighten-1",
          },
          {
            title: "HSC",
            description: "T.C. College",
            institution: "2011",
            year: 2011,
            color: "cyan-lighten-1",
          },
          {
            title: "SSC",
            description: "Shir Chhtrapati English Medium School",
            institution: "2010",
            year: 2010,
            color: "red-lighten-1",
          },
        ],
      };
    },
    methods: {
      // Map title to an icon
      getIconForTitle(title) {
        const icons = {
          "BE in Electrical Engineering": "mdi-lightbulb-on",
          "Diploma in Electrical Engineering": "mdi-cog",
          "HSC": "mdi-school",
          "SSC": "mdi-school",
        };
  
        return icons[title] || "mdi-education"; // Default icon if no match
      },
    },
  };
  </script>
  
  <style scoped>
  /* Apply translateY animation to the entire page */
  .page-content {
    animation: translateYAnimation 1s ease-out;
  }
  
  /* Card Customization */
  .card-custom {
    border-radius: 16px; /* Rounded corners */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Scale on hover */
  }
  
  .card-custom:hover {
    transform: scale(1.05); /* Scale the card on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
  }
  
  /* Adjust font sizes for different screen sizes */
  .text-sm {
    font-size: 14px;
  }
  
  .text-md {
    font-size: 18px;
  }
  
  @media screen and (max-width: 600px) {
    .text-center {
      font-size: 20px;
    }
  
    .card-custom {
      transform: none; /* Disable hover scale on smaller screens */
      box-shadow: none;
    }
  }
  
  @media screen and (min-width: 601px) and (max-width: 960px) {
    .text-center {
      font-size: 24px;
    }
  }
  
  @media screen and (min-width: 961px) {
    .text-center {
      font-size: 28px;
    }
  }
  
  /* Keyframe for translateY animation */
  @keyframes translateYAnimation {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>
  
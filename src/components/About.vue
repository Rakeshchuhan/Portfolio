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

    <div class="page-content">
      <v-container fluid class="d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <h1 class="text-center mb-4">Contact Me</h1>
        <div class="rounded-card">
          <v-form ref="form" v-model="isValid">
            <v-row justify="center pa-8">
              <v-col cols="12" sm="12">
                <v-text-field label="Name" type="text" name="name" prepend-inner-icon="mdi-account" v-model="formData.name" required variant="solo" :rules="[requiredRule]" />
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field label="Email" type="email" name="email" prepend-inner-icon="mdi-email" :rules="[requiredRule, emailRule]" v-model="formData.email" required variant="solo" />
              </v-col>
              <v-col cols="12" sm="12">
                <v-textarea label="Description" name="description" prepend-inner-icon="mdi-pencil" required variant="solo" :rules="[requiredRule]" v-model="formData.description"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn
                  :disabled="!isValid || isLoading"
                  color="primary"
                  block
                  @click="handleSubmit"
                >
                  <v-progress-circular
                    v-if="isLoading"
                    indeterminate
                    color="white"
                    size="24"
                    width="3"
                  ></v-progress-circular>
                  <span v-if="!isLoading">Send</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- Success Dialog -->
  <v-dialog v-model="successDialog" max-width="500px">
    <v-card>
            <v-card-title class="text-center">
              <!-- <v-icon color="green" large>mdi-check-circle</v-icon> -->
               <center>
                <v-img src="https://media.tenor.com/AWKzZ19awFYAAAAi/checkmark-transparent.gif" height="200"
               width="200"></v-img>
               </center>
               
            </v-card-title>
            <v-card-text class="text-center">
              <h1>Thank You!</h1>
              Your details has been successfully submitted.Thanks!
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="successDialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>

    </v-dialog>

    <!-- Error Dialog -->
    <v-dialog v-model="errorDialog" max-width="600px">
      <v-card>
        <v-avatar size="320" class="mx-auto elevation-0 mt-4 ">
          <v-img src="https://media4.giphy.com/media/7s12pEZorHtU3gcqDn/giphy.gif?cid=6c09b952f7kr0upa93g6amg6bi7olrfa52ee28obujee2zwt&ep=v1_gifs_search&rid=giphy.gif&ct=g" height="400"
          width="300"></v-img>
        </v-avatar>   
        <v-card-text class="text-center">
          Failed to send email. Please try again.
          <v-icon color="red" large>mdi-alert-circle</v-icon>
        </v-card-text>
        <h5 class="text-center">OR</h5>
        <v-card-text class="text-center">
         You can contact me on whatsapp number : 8698779843 
          <v-icon color="green" large>mdi-whatsapp</v-icon>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="errorDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>

  </div>
</template>

<script>
import AppBar from "@/Layout/AppBar.vue";
import emailjs from "emailjs-com";

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
          color: "red-lighten-1",
        },
        {
          title: "Diploma in Electrical Engineering",
          description: "Dattakala Polytechnic",
          institution: "2027",
          year: 2017,
          color: "red-lighten-1",
        },
        {
          title: "Higher Secondary Certificate",
          description: "T.C. College",
          institution: "2011",
          year: 2011,
          color: "cyan-lighten-1",
        },
        {
          title: "Secondary School Certificate",
          description: "Shir Chhtrapati English Medium School",
          institution: "2010",
          year: 2010,
          color: "red-lighten-1",
        },
      ],
      formData: {
        name: "", 
        email: "",
        description: "",
      },
      isLoading : false,
      isValid: false,
      // showDialog: false,
      successDialog: false, // Controls the success dialog visibility
      errorDialog: false,    // Controls the error dialog visibility
      requiredRule: (v) => !!v || "This field is required",
      emailRule: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    };
  },
  methods: {
    // Map title to an icon
    getIconForTitle(title) {
      const icons = {
        "BE in Electrical Engineering": "mdi-lightbulb-on",
        "Diploma in Electrical Engineering": "mdi-cog",
        "Higher Secondary Certificate": "mdi-school",
        "Secondary School Certificate": "mdi-school",
      };

      return icons[title] || "mdi-education"; // Default icon if no match
    },
   
    handleSubmit() {
      // Simulate saving data
      console.log("Form Submitted", this.formData);
      this.showDialog = true;

      // Reset form
      this.$refs.form.reset();
    },
    closeDialog() {
      this.showDialog = false;
    },

    async handleSubmit() {
      if (this.isValid) {
        this.isLoading = true;
        const templateParams = {
          to_name: this.formData.name,
          from_name: this.formData.email,
          message: this.formData.description
        };

        try {
          const result = await emailjs.send(
            "service_030zstg", // Replace with your EmailJS service ID
            "template_aw30jzi", // Replace with your EmailJS template ID
            templateParams,
            "8rv36g8qeQcBnyE4Q" // Replace with your EmailJS public key
          );
          this.successDialog = true;
          this.$refs.form.reset();  // Reset the form to clear the validation and data
          this.isValid = false;  
        } catch (error) {
          this.errorDialog = true;
          console.error("EmailJS Error:", error);
        } finally {
          this.isLoading = false; // Hide loader after submission is finished
        }
      }
    }
  },
};
</script>

<style scoped>
  .rounded-card {
    border-radius: 16px; /* Adjust this value for your preference */
  }

  .text-success {
  color: #4caf50;
  font-weight: bold;
}
.page-content {
  animation: translateYAnimation 1s ease-out;
}

.text-center {
  font-size: 1.5rem;
  font-weight: bold;
}

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
.contact-svg {
  max-width: 550px !important;
  height: auto;
}




/* Apply translateY animation to the entire page */
.page-content {
  animation: translateYAnimation 1s ease-out;
}

/* Card Customization */
.card-custom {
  border-radius: 16px; /* Rounded corners */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Scale on hover */
  display: inline-block; /* Ensure cards shrink to fit content */
  max-width: calc(100% - 32px); /* Prevent overflow */

}

.card-custom:hover {
  transform: scale(1.05); /* Scale the card on hover */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
  
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

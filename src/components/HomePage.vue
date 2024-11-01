<template>
    <AppBar />
  <v-container fluid class="home">
    <div class="transparent-layer"></div>
      <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" sm="7" >
            <div class="rw">
          <h2 class="animate__animated animate__slideInDown animate__delay-1s ">Hello, I Am</h2>
          <h1 class="animate__animated animate__slideInDown animate__delay-1s">Rakesh Chauhan</h1>
          <!-- <p class="animate__animated animate__slideInDown animate__delay-1s">
            I am a Software Developer Specializing in frontend Development.
          </p> -->
          <p class="typewriter">{{ typewriterText }}</p>
          <div class="mt-5">
             <v-btn class="rounded-pill hover-btn" color="primary" @click="downloadResume">Download Resume</v-btn>
         </div>
        </div>
          </v-col>
          <v-col cols="12" sm="5">
            <div align="center" justify="center" >
              <v-avatar size="500" class="mx-auto elevation-15">  <!-- Set size for the avatar -->
                          <!-- <v-img src="@/assets/your-photo.jpg" height="200" width="200"></v-img>  -->
                          <v-img src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.6435-9/96515113_2994043227377812_5094914266369097728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_ohc=cpzLvvP60rQQ7kNvgGvBoil&_nc_zt=23&_nc_ht=scontent.fpnq6-1.fna&_nc_gid=AfntaABOXdCHfQAhtijaODd&oh=00_AYDkm69TUCqJEY2MmwCxitzeP4tZ7ZjtcMhNQysbbYuEhA&oe=67497F08" height="700" width="700"></v-img> <!-- Set height and width for the image -->
                  </v-avatar>
            </div>
            </v-col>
      </v-row>
  </v-container>
  <v-container fluid class="home1">
      <v-row class="mt-10 pl-10 containe-row">
          <v-col cols="12" sm="5">
            <div align="center" justify="center">
              <v-avatar size="300" class="mx-auto elevation-15"> <!-- Set size for the avatar -->
                          <!-- <v-img src="@/assets/your-photo.jpg" height="200" width="200"></v-img>  -->
                          <v-img src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.6435-9/96515113_2994043227377812_5094914266369097728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_ohc=cpzLvvP60rQQ7kNvgGvBoil&_nc_zt=23&_nc_ht=scontent.fpnq6-1.fna&_nc_gid=AfntaABOXdCHfQAhtijaODd&oh=00_AYDkm69TUCqJEY2MmwCxitzeP4tZ7ZjtcMhNQysbbYuEhA&oe=67497F08" height="400" width="400"></v-img> <!-- Set height and width for the image -->
                  </v-avatar>
            </div>
                  
          </v-col>
          <v-col cols="12" sm="7">
              <h1 class="text1 ml-10">About Me</h1>
              <p class="ml-10" justify="center">
                  Hello! I'm Rakesh Chauhan, a passionate software engineer with a strong focus on frontend development. I have a knack for turning complex problems into simple, beautiful, and intuitive designs. My journey in technology
                  started at a young age, and over the years, I have honed my skills in various programming languages and frameworks.
              </p>
              <div class="dic">
                <h2 class="ml-10">Contact Information</h2>
              <p class="ml-10 d-flex align-center">
                  <v-icon color="#086ba8" small>mdi-account</v-icon>
                  <span class="ab">Name: </span> <span class="ab">Rakesh Chauhan</span>
              </p>
              <p class="ml-10 d-flex align-center">
                  <v-icon color="#086ba8" small>mdi-phone</v-icon>
                  <span class="ab">Mobile: </span> <span class="ab">8698779843</span>
              </p>
              <p class="ml-10 d-flex align-center">
                  <v-icon color="#086ba8" small>mdi-email</v-icon>
                  <span class="ab">Email id: </span> <span class="ab"> findrakes09@gmail.com</span>
              </p>
              </div>
             
          </v-col>
          <v-row justify="center">
            <span>
              <a href="https://www.instagram.com/rakeshh___9/profilecard/?igsh=MWF2OGM5dzRqMmt6bw==" target="_blank" class="ml-3">
                <v-icon color="#FF0000" class="linkedin-icon" icon="mdi-instagram" :style="{ fontSize: '36px' }"></v-icon>

              </a>
              <a href="https://www.facebook.com/rakesh.chauhan.7355?mibextid=ZbWKwL" target="_blank" class="ml-3 ">
                <v-icon color="#4267B2" class="linkedin-icon"  icon="mdi-facebook" :style="{ fontSize: '36px' }"></v-icon>
              </a>
              <a href="https://wa.me/qr/6WFGX67DZ662N1" target="_blank" class="ml-3 "> 
                <v-icon color="#25D366" class="linkedin-icon"  icon="mdi-whatsapp" :style="{ fontSize: '36px' }"></v-icon>
              </a>
              <a href="https://www.linkedin.com/in/rakesh-chauhan-a65b4316b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="ml-3 linkedin-icon">
                <v-icon color="#0A66C2" class="linkedin-icon"  icon="mdi-linkedin" :style="{ fontSize: '36px' }"></v-icon>
              </a>
            </span>
             
          </v-row>
      </v-row>
     
  </v-container>
</template>

<script>
import AppBar from '@/Layout/AppBar.vue'
import resume from '@/assets/Rakesh_Chauhan_CV.pdf';

export default {
  components: {
    AppBar,
  },
  data() {
    return {
      fullText: "I am a Software Developer Specializing in frontend Development.",
      typewriterText: "", // Initially empty
    }
  },
  mounted() {
    this.startTypewriter();
  },
  methods: {
    startTypewriter() {
      let index = 0;
      const typingSpeed = 50; // Speed of typing in ms

      const typeInterval = setInterval(() => {
        if (index < this.fullText.length) {
          this.typewriterText += this.fullText[index];
          index++;
        } else {
          clearInterval(typeInterval); // Stop when all text is displayed
        }
      }, typingSpeed);
    },
    downloadResume() {
  const link = document.createElement('a');
  link.href = resume; // Use the imported path
  link.download = 'Rakesh_Chauhan_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
},
  },
}
</script>

<style scoped>
  .home {
      height: 100vh;
      display: flex;
      /* background-color: #dedfdf; */
      /* background: rgb(227,238,238); */
      /* background: linear-gradient(90deg, rgba(227,238,238,1) 0%, rgba(207,232,238,1) 100%, rgba(229,234,236,1) 100%, rgba(240,239,239,1) 100%); */
  }
  .home1 {
      height: 90vh; /* Change to auto to fit content */
      display: flex;
      /* background-color: #f0f5f5; */
      /* background: rgb(227,238,238); */
      /* background: linear-gradient(90deg, rgba(227,238,238,1) 0%, rgba(207,232,238,1) 100%, rgba(229,234,236,1) 100%, rgba(240,239,239,1) 100%); */
  }
  .transparent-layer{
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(172, 170, 170, 0.2); /* Change opacity as needed */
     display: flex;
     justify-content: center;
     align-items: center;
  }
  .containe-row{
    display: flex ;
    flex-direction: row;
  }
  .cont2 {
      margin-top: 50px; /* Add margin-top */
      margin-bottom: 20px; /* Optional: Add margin-bottom if needed */
  }
  .home h1 {
      font-size: 50px;
  }
  .home p {
      font-size: 22px;
  }
  .home h2 {
      font-size: 30px;
  }
  .home1 h1 {
      font-size: 50px;
  }
  .text {
      text-decoration: underline;
      color: #0647ed;
  }
  .text1 {
      color: #061c52;
  }
  .ab {
      color: #086ba8;
      font-weight: bold;
      font-size: 20px;
      padding-left: 20px;
  }
  .dic {
      margin-top: 20px;
  }
  .rw {
      padding-left: 50px;
  }
  .linkedin-icon:hover{
    transform: translateY(-12px);
  }
  .linkedin-icon{
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .hover-btn {
    transition: transform 0.2s ease;
}

.hover-btn:hover {
    transform: scale(0.85);
}
  .typewriter {
    font-size: 22px;
    color: #082ab1;
    /* border-right: 2px solid #086ba8; */
    animation: blinkCursor 0.7s infinite; /* Blinking cursor effect */
  }

  @keyframes blinkCursor {
    0%, 100% {
      border-color: transparent;
    }
    50% {
      border-color: #086ba8;
    }
  }
</style>

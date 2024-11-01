<template>
    <AppBar />
    <br />
    <h1 class="text-center">Education</h1>
    <v-container fluid class="abo">
      <v-row >
        <v-col cols="12">
        <v-timeline>
            <v-timeline-item dot-color="purple-lighten-2" size="small" fill-dot>
                <v-card>
                    <v-card-title class="bg-purple-lighten-2">
                        <h2 class="font-weight-light">
                            BE in Electrical Engineering
                        </h2>
                    </v-card-title>
                    <v-card-text>
                     Dattakala Group of Institute of Technology : 2020
                    </v-card-text>
                </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="amber-lighten-1" size="small" fill-dot>
                <v-card>
                    <v-card-title class="bg-amber-lighten-1 justify-end">
                        <h2 class="me-4 font-weight-light">
                            Diploma In Electrical Engineering
                        </h2>
                    </v-card-title>
                    <v-card-text>
                        Dattakala Polytechnic  : 2017
                    </v-card-text>
                </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="cyan-lighten-1" size="small" fill-dot>
                <v-card>
                    <v-card-title class="bg-cyan-lighten-1">
                        <h2 class="font-weight-light">
                            HSC
                        </h2>
                    </v-card-title>
                    <v-card-text>
                      T.C.College : 2011
                    </v-card-text>
                </v-card>
            </v-timeline-item>

            <v-timeline-item dot-color="red-lighten-1" size="small" fill-dot>
                <v-card>
                    <v-card-title class="bg-red-lighten-1 justify-end">
                        <h2 class="me-4 font-weight-light">
                          SCC
                        </h2>
                    </v-card-title>
                    <v-card-text>
                     Shir Chhtrapati English Medium School : 2010
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
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
    name: "About",
};
</script>

<style scoped>
.abo {
    height: 90vh;
    display: flex;
    /* background: linear-gradient(90deg, rgba(227, 238, 238, 1) 0%, rgba(207, 232, 238, 1) 100%); */
}

.v-timeline {
    padding: 50px; /* Adjust padding to make it more compact */
}

.v-card {
    margin: 4px 0; /* Reduce margin between cards */
    min-width: 100px; /* Set a minimum width for the cards */
}
.text-center {
  text-align: center;
  color: blue;

}
</style>

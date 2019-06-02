<template>
<v-container>
<TopNav
title1 = "Group View"
title2 = "Individual View"
title3 = "signup"
dest1 = "/"
dest2 = "individual_view"
dest3 =  ""></TopNav>
<v-layout row justify-content-space-between>
       <v-flex xs6 mr-3 >
         <v-card class="flower-card"
         pt-5
         >
        <img class= "center" src="../assets/indFlower.png">
         </v-card>
    </v-flex>
    <v-spacer></v-spacer>
     <v-flex xs6  ml-3>
         <v-btn block color="secondary" dark>Individual View</v-btn>
     </v-flex> 
  </v-layout>

  <v-layout row>
    <Calendar/>
  </v-layout>
</v-container>
</template>

<script>
import Landing from '../components/Landing'
import TopNav from '../components/TopNav'
import Calendar from '../components/Calendar'
  export default {
    components: {
      Calendar,
      Landing,
      TopNav
    }
  }
</script>
<style>
.center {
display: block;
  margin-left: auto;
  margin-right: auto;
}
.flower-card {
  padding: 5%;
}
</style>



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
       <v-flex xs6 mb-3 >
         <v-card class="flower-card"
         pt-5
         >
        <img class= "center" src="../assets/indFlower.png">
         </v-card>
      <v-layout row>
     <v-flex mt-3 mb-3 >
    <v-card  mb-3 >
       <v-date-picker 
       width = 550
       color = "#fff"
       v-model="picker" 
       :landscape="false" 
       :reactive="reactive"></v-date-picker>
       </v-card>
     </v-flex>
  </v-layout>
   <v-layout row>
     <v-flex   mb-3 >
    <v-card>
      <div  class="roadBlock">
      <h2 >Road Blocks</h2>
      </div>
      <roadblock mb-3/>
      <roadblock mb-3/>
      
       </v-card>
     </v-flex>
  </v-layout>
    </v-flex>
    <v-spacer></v-spacer>

     <v-flex xs6  ml-3>
       <v-card>
         <v-layout row justify-content-space-between>
          
        <v-flex xs4 mr-3 ml-1>
          <v-btn 
          to="individual_view"
          block 
          color="secondary" 
          dark>Current Tasks</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs4  ml-3>
          <v-btn 
          to="individual_view"
          block 
          color="secondary" dark>Backlog</v-btn>
      </v-flex> 
      <v-flex xs4  ml-3 mr-1>
          <v-btn 
          to="individual_view"
          block 
          color="secondary" 
          dark>Done</v-btn>
      </v-flex> 
    </v-layout>
    <v-layout row>
      <v-flex row >
        <div class="roadBlock margin-right">
        <v-text-field
            label="Name of Task"
            single-line
            outline
            required
          ></v-text-field>
           <v-text-field
           xs6 ml-3
            label="Estimated Hours"
            single-line
            outline
            required
          ></v-text-field>
           <v-text-field
            label="Points"
            single-line
            outline
            required
          ></v-text-field>
           <v-textarea
          outline
          required
          name="input-7-4"
          label="Description"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
        <v-select
        outline
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Status"
      required
    ></v-select>
        <task/>
        <task/>
          </div>
      </v-flex>
    </v-layout>
    </v-card>
     </v-flex> 
  </v-layout>

  
</v-container>
</template>

<script>
import Landing from '../components/Landing'
import TopNav from '../components/TopNav'
import task from '../components/task'
import roadblock from '../components/roadblock'
import { VCard, VCardText, VCardMedia } from 'vuetify/lib'
import tasks from '../components/Landing.vue'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Backlog',
        'In Progress',
        'Complete',
        'In Production'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    },
    components: {
      roadblock,
      Landing,
      TopNav,
      task
    }
  }
</script>
<style>
.center {
display: block;
  margin-left: auto;
  margin-right: auto;
}
.roadBlock {
  margin-left: 30px;
  padding-top: 30px;
}
.margin-right {
  margin-right: 30px;
}




.flower-card {
  padding: 5%;
}
</style>



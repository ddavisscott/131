<template>
<v-container>
  <!-- <v-layout row justify-content-space-between>
        <v-flex xs4 mr-3 ml-1>
          <v-btn block color="secondary" dark>When To Meet</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs4  ml-3>
          <v-btn block color="secondary" dark>Standup Scrum Meeting</v-btn>
      </v-flex> 
      <v-flex xs4  ml-3 mr-1>
          <v-btn block color="secondary" dark>Meeting Notes</v-btn>
      </v-flex> 
    </v-layout> -->

    <v-layout xs12 row justify-content-space-between>
      
      <div class="chart-card">
        <v-card>
          <br>
        <h3 class=" headline ml-5 mt-4">Meeting Notes</h3>
          <br/>
          <note 
          v-for = "note in notes" 
          v-bind:key= 'note.title'
         v-bind:title = 'note.title'
         v-bind:description = 'note.description' />

         <!-- <img class="img" src="../assets/chart.png">
         <div class="effort">
         <h3 class=" headline">Number of Effort:</h3>
          <v-text-field
            label="enter your effort"
            single-line
            outline
            required
          ></v-text-field>
          <v-btn color="warning">Enter</v-btn>
           <v-btn flat small>Cancel</v-btn> -->
          <br>
          </v-card>
          </div>
      
       
    </v-layout>

</v-container> 
</template>

<script>
    import note from '../components/note'
    import task from '../components/task'

  export default {
    data: () => ({
      newTitle:'',
      newDescription: '',
      name: '',
      hours: '',
      points: '',
      des: '',
      notes: [
        {title: 'Meeting 5/2/2019', description: 'Main menu has been decided to include a new graphic.'},
        {title: 'Meeting 4/19/2019', description: 'Please bring a light snack for tomorrow\'s potluck.'}
      ],
      tasks: [
        {name: 'Nav Bar', hours: '7',  points: '5', des: 'create a nav bar'},
        {name: 'side bar', hours: '4',  points: '3', des: 'create a side bar'}
      ],
      user: 'Ciaran',
      userLevel: 'Admin'
    }),
    components: {
      note,
      task
    },
    methods: {
    addBulletin () {
      if (this.newTitle !== '' && this.newDescription !='') {
        this.notes.push ({title: this.newTitle, description: this.newDescription})
    }
    this.newTitle = '';
    this.newDescription = '';
      },
   addTask () {
      if (this.name !== '' && this.hours !=''  && this.des !='') {
        this.tasks.push ({name: this.name, hours: this.hours, points: this.points, des: this.des})
    }
    this.name = '';
    this.hours = '';
    this.points = '';
    this.des = '';
      }
      
  },

  }
</script>


<style scoped>
.chart-card {
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 90%;
}
.img {
  margin-left: 30px;
  width: 90%;
}
.effort {
  margin-top: 20px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
</style>

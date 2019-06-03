<template>
  <v-container>
    
    <v-layout row
      text-xs-center
      wrap
    >
    <!-- <v-layout row justify-content-space-between>
       <v-flex xs6 mr-3 >
        <v-btn block color="secondary" dark>Group View</v-btn>
    </v-flex>
    <v-spacer></v-spacer>
     <v-flex xs6  ml-3>
         <v-btn block color="secondary" dark>Individual View</v-btn>
     </v-flex> 
    </v-layout>
        -->
      <v-flex xs12>
        <img src="../assets/home.png" width="100%">
      </v-flex>
      <v-flex xs3>
        <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Bulletin</h3>
          </div>
        </v-card-title>

         <div class="px-3">      
             <v-text-field
            label="Title"
            single-line
            outline
            v-model="newTitle"
          ></v-text-field>
          <v-text-field
            label="Description"
            single-line
            outline
            v-model="newDescription"
          ></v-text-field>
          <v-btn 
          class="mb-3" 
          color="warning"
          v-on:click = "addBulletin"
          >Create</v-btn>
          <note 
          v-for = "note in notes" 
          v-bind:key= 'note.title'
         v-bind:title = 'note.title'
         v-bind:description = 'note.description' />
         </div>
         
       
      </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Meeting Manager</h3>

        <v-flex xs6  ml-3>
         <v-layout row justify-content-space-between>
          
        <v-flex xs7 mr-3 ml-1>
          <v-btn 
          to=""
          block 
          color="secondary" 
          dark>When To Meet</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs7  >
          <v-btn 
          to="notes"
          block 
          color="secondary" dark>Standup Meeting</v-btn>
      </v-flex> 
      <v-flex xs7  ml-3 mr-1>
          <v-btn 
          to="meeting"
          block 
          color="secondary" 
          dark>Meeting Notes</v-btn>
      </v-flex> 
    </v-layout>
                 </v-flex>
           
          </div>
        </v-card-title>

        <v-card-actions>
          <img  src = "../assets/heatmap.png" width="100%">
        </v-card-actions>
      </v-card>
      </v-flex>
        <v-flex xs3>
          
        <v-card p-3 pr-3>
          <div pl-2>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Create a Task</h3>
          </div>
        </v-card-title>
        <div class="px-3">
        <v-text-field
            ml-2
            label="Name"
            outline
            v-model="name"
          ></v-text-field>
           <v-text-field
            label="Description"
            single-line
            outline
            v-model="des"
          ></v-text-field>
           <v-text-field
            label="hour"
            single-line
            outline
            v-model="hour"
          ></v-text-field>
           <v-text-field
            label="Point"
            single-line
            outline
            v-model="points"
          ></v-text-field>
           </div>
          </div>
           <v-btn 
           class="mb-3"  
           color="warning"
           v-on:click = "addTask">Create</v-btn>
           <task 
          v-for = "task in tasks" 
          v-bind:key= 'task.name'
         v-bind:name = 'task.name'
         v-bind:hour = 'task.hour' 
          v-bind:points = 'task.points'
         v-bind:des = 'task.des' />
      </v-card>
     
      </v-flex>
      
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
      hour: '',
      points: '',
      des: '',
      notes: [
        {title: 'Meeting Tomorrow', description: 'Description text1'},
        {title: 'High Priority task', description: 'Description text2'}
      ],
      tasks: [
        {name: 'Main Menu', hour: '7',  points: '5', des: 'create a nav bar'},
        {name: 'side bar', hour: '4',  points: '3', des: 'create a side bar'}
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
    this.hour = '';
    this.points = '';
    this.des = '';
      }
      
  },

  }
</script>

<style>

</style>

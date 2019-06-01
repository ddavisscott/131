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

        
           <v-text-field
            label="New Item"
            single-line
            outline
          ></v-text-field>
       
      </v-card>
      </v-flex>


      <v-flex xs6>
        <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Create a Task</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <img  src = "../assets/heatmap.png">
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

        <v-text-field
            ml-2
            label="Name"
            single-line=
            outline
          ></v-text-field>
           <v-text-field
            label="Description"
            single-line
            outline
          ></v-text-field>
           <v-text-field
            label="Person"
            single-line
            outline
          ></v-text-field>
           <v-text-field
            label="Peta"
            single-line
            outline
          ></v-text-field>
          <v-btn mb-3 color="warning">Create</v-btn>
          </div>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      user: 'Ciaran',
      userLevel: 'Admin'
    })
  }
</script>

<style>

</style>

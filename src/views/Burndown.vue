<template>
<v-container>
  <v-layout row justify-content-space-between>
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
    </v-layout>

    <v-layout xs12 row justify-content-space-between>
      
      <div class="chart-card">
        <v-card>
          <br>
        <h3 class="ml-5 mt-4">Burndown Chart</h3>
          <br/>
         <img class="img" src="../assets/chart.png">
         <div class="effort">
         <h3>Number of Effort:</h3>
          <v-text-field
            label="enter your effort"
            single-line
            outline
            required
          ></v-text-field>
          <v-btn color="warning">Enter</v-btn>
           <v-btn flat small>Cancel</v-btn>
          </div>
          <br>
      </v-card>
      </div>
      
       
    </v-layout>

</v-container> 
</template>

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

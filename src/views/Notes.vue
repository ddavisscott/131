<template>
<v-container>
  <v-layout xsrow justify-content-space-between>
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
      <v-flex xs6>
      <div class="chart-card">
        <v-card>
          <br>
        <h3 class="headline ml-5 mt-4">Meeting Notes</h3>
          <br/>
         <note
         title = "Note 1"
         description = "Description text" />
         <br>
         <note
         title = "Note 2"
         description = "Description text2" />
           <br>
         <note
         title = "Note 3"
         description = "Description text3" />
         
          <br>
      </v-card>
      </div>
      </v-flex>
      <v-flex xs6>
      <div class="chart-card">
        <v-card>
          <br>
        <h3 class="headline ml-5 mt-4">Meeting Notes</h3>
          <br/>
          <div class="chart-card">
        <v-textarea
          outline
          name="input-7-4"
          label="Enter your meeting note"
          value="note."
        ></v-textarea>
        <v-btn color="warning">Submit</v-btn>
          </div>
          <br>
        <Countdown />
      </v-card>
      </div>
      </v-flex>


      
       
    </v-layout>

</v-container> 
</template>
<script>
  import note from '../components/note'
  import Countdown from '../components/Countdown'

  export default {
    components: {
      note,
      Countdown
    }
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
</style><

 <template>
  <v-card>
      <div class="task">
    <h3>Name of the Task: </h3>
    Task1
    <h3>Estimated Hours:</h3>
    5
    <h3>Points:</h3>
    8
    <h3>Description</h3>
    New Task
    </div>
  </v-card>    
</template>
<script>
  export default {
    props: ['title1', 'title2', 'title3', 'dest1', 'dest2','dest3'],
  }
</script>
<style scoped>
 .task {
     margin-bottom: 10px;
     padding: 20px;
 }
</style>

 
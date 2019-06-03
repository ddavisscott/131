 <template>
  <v-card>
      <div class="task">
    <h3>Name of the Task: </h3>
    {{name}}
    <h3>Estimated Hours: </h3>
    {{hours}}
    <h3>Points: </h3>
    {{points}}
    <h3>Description: Description: </h3>
   {{des}}
    </div>
  </v-card>    
</template>
<script>
  export default {
    props: ['name', 'hours', 'points', 'des'],
  }
</script>
<style scoped>
 .task {
     margin-bottom: 10px;
     padding: 20px;
 }
</style>

 
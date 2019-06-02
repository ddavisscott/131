 <template>
  <div class="nav_container">
  <v-layout row justify-content-space-between>
       <v-flex xs6 >
        <v-btn 
        block color="secondary" 
        :to="dest1"
        dark>{{title1}}
        </v-btn>
    </v-flex>
    <v-spacer></v-spacer>
     <v-flex xs6  ml-3>
         
         <v-btn 
        block color="secondary" 
        :to="dest2"
        dark>{{title2}}
        </v-btn>
     </v-flex> 
    </v-layout>
</div>
</template>
<script>
  export default {
    props: ['title1', 'title2', 'title3', 'dest1', 'dest2','dest3'],
  }
</script>
<style>
 .nav_container {
     padding-top: 10px;
     padding-bottom: 10px;
 }
</style>

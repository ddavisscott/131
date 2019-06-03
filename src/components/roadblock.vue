 <template>
  <div class="roadblock">
      <v-flex column>
          <p>John Doe's roadbloack</p>
          <p>Description Text</p>
             <v-btn small color="warning" dark>Done</v-btn>


      </v-flex>
</div>
</template>
<script>
  export default {
    props: ['title1', 'title2', 'title3', 'dest1', 'dest2','dest3'],
  }
</script>
<style>
 .roadblock {
     padding:20px;
     display: block;
     margin-left:auto;
     margin-right:auto;
     margin-top: 10px  !important;
     background-color: bisque;
     height: 140px;
     width: 90%;
 }
</style>

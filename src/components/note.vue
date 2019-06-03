 <template>
 <div class="note">
   <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{title}}</div>
                  <span>{{description}}</span>
                </div>
              </v-card-title>
              <!-- <v-card-actions>
                <v-btn flat dark>Delete</v-btn>
              </v-card-actions> -->
</v-card>   
 </div>
</template>
<script>
  export default {
       props: ['title', 'description'],
  }
</script>
<style scoped>
 .note {
     margin-bottom: 10px;
     padding: 20px;
 }
</style>

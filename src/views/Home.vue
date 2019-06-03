<template>
<v-container>
  <TopNav
title1 = "Group View"
title2 = "Individual View"
title3 = ""
dest1 = ""
dest2 = "individual_view"
dest3 =  ""></TopNav>
  <Landing/>
</v-container>
</template>

<script>
  import Landing from '../components/Landing'
  
import TopNav from '../components/TopNav'
  export default {
    components: {
      Landing,
      TopNav
    }
  }
</script>

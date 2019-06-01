<template>
<v-container>
  <TopNav/>
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

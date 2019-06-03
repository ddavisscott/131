<template>
<!-- our template -->
<section id="app" class="hero is-info is-fullheight is-bold">
<div class="hero-body">
<div class="container has-text-centered">
     <div id="timer">
        <span id="minutes">{{ minutes }}</span>
        <span id="middle">:</span>
        <span id="seconds">{{ seconds }}</span>
    </div>

    <!--  THE BUTTONS  -->
<div id="buttons">

<!--  START BUTTON    -->
<div id="buttons">
<!--     Start TImer -->
<v-btn 
color="warning"
id="start" 
class="button is-dark is-large" 
@click="startTimer"
>Start</v-btn>
    <!--     Pause Timer -->
    <v-btn 
    color="warning"
    id="stop" 
    class="button is-dark is-large"  
    @click="stopTimer">
    Stop</v-btn>
    <!--     Restart Timer -->
   <v-btn 
    color="warning"
    id="reset" 
    class="button is-dark is-large" 
    @click="resetTimer">
    Reset</v-btn>
</div>
  </div>

<!-- The bulk of the timer -->

</div>
</div>
</section>
</template>


<style scoped>
#message {
  color: #DDD;
  font-size: 50px;
  margin-bottom: 20px;
}

#timer {
  font-size: 40px;
  line-height: 1;
  margin-bottom: 40px;
}
.button{
    background-color: red;
}

</style>


<script>
module.exports = {
  data: function () {
    return {
      timer: null,
totalTime: (15 * 60),
resetButton: false,
title: "Let the countdown begin!!"
    }
  },

  methods: {
startTimer: function() {
  this.timer = setInterval(() => this.countdown(), 1000);
  this.resetButton = true;
},
stopTimer: function() {
  clearInterval(this.timer);
  this.timer = null;
  this.resetButton = true;
},
resetTimer: function() {
  this.totalTime = (15 * 60);
  clearInterval(this.timer);
  this.timer = null;
  this.resetButton = false;
},
padTime: function(time) {
  return (time < 10 ? '0' : '') + time;
},
countdown: function() {
  this.totalTime--;
}
},
computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
}
</script>

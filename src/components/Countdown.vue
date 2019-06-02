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
    <button 
      id="start" 
      class="button is-dark is-large" 
      @click="startTimer">Start
    </button>
    <!--     Pause Timer -->
    <button 
      id="stop" 
      class="button is-dark is-large" 
      v-if="timer"
      @click="stopTimer">
        <i class="far fa-pause-circle"></i>
    </button>
    <!--     Restart Timer -->
    <button 
      id="reset" 
      class="button is-dark is-large" 
      v-if="resetButton"
      @click="resetTimer">
        <i class="fas fa-undo"></i>
    </button>
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
  font-size: 200px;
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
totalTime: (25 * 60),
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
  this.totalTime = (25 * 60);
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

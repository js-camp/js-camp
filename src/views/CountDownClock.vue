<template>
  <section id="count">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="count-wrapper text-center">
            <div class="time-countdown wow fadeInUp" data-wow-delay="0.2s">
              <div id="clock" class="time-count" v-if="clock.days > 0">
                <div class="time-entry days"><span>{{clock.days}}</span> <b>:</b> Days</div>
                <div class="time-entry hours"><span>{{clock.hours}}</span> <b>:</b> Hours</div>
                <div class="time-entry minutes"><span>{{clock.minutes}}</span> <b>:</b> Minutes</div>
                <div class="time-entry seconds"><span>{{clock.seconds}}</span> Seconds</div>
              </div>
              <div id="clock" class="time-count" v-else>
                <div class="time-entry days "><span>Done</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name : 'count-down-clock',
  data () {
    return {
      clock      : {
        days   : 0,
        hours  : 0,
        minutes: 0,
        seconds: 0
      },
    }
  },
  props: {
    date : {}
  },
  methods : {
    clockTimer : function () {
      let timerDifference = (new Date(this.date)).getTime() - (new Date()).getTime()
      let floor = Math.floor

      let seconds = floor(timerDifference / 1000);
      let minutes = floor(seconds / 60);
      let hours = floor(minutes / 60);
      let days = floor(hours / 24);

      if (days < 0) {
        clearTimeout(this.clockTimer)
        return;
      }

      this.$data.clock = {
        days   : days,
        hours  : hours % 24,
        minutes: minutes % 60,
        seconds: floor(seconds) % 60
      }

      seconds = minutes = hours = null

      setTimeout(this.clockTimer, 1000)
    }
  },
  mounted () {
    this.clockTimer();
  }
}
</script>

<template>
  <div>
    <h3>Whats next?</h3>
    <div class="break-9" />
    <div class="margin">
      <div class="section outer flex-row">
        <div class="step outer"><p class="inner">1</p></div>
        <div class="inner">
          <p>Install and launch <a href="https://www.runelite.net" target="_blank">RuneLite</a>.</p>
        </div>
      </div>
      <div class="section outer flex-row">
        <div class="step outer"><p class="inner">2</p></div>
        <div class="inner">
          <p>Locate the RuneLite plugin hub.</p>
          <p>Seach and install RuneDex.</p>
        </div>
      </div>
      <div class="section outer flex-row">
        <div class="step outer"><p class="inner">3</p></div>
        <div class="inner">
          <p>In RuneLite, open the plugin configuration for RuneDex.</p>
          <p>Enter PIN "<b>{{ user.auth && user.auth.pin }}</b>"</p>
        </div>
      </div>
      <div class="section outer flex-row">
        <div class="step outer"><p class="inner">4</p></div>
        <div class="inner">
          <p>Log in, and start playing.</p>
          <p>Your account is now linked!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('authentication', ['user'])
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.outer {
  display: table;
  height: 100%;
}
.inner {
  display: table-cell;
  vertical-align: middle;
}
.section {
  p {
    margin: 0;
  }
  margin-bottom: 8px;
}
.margin {
  margin-left: 7px;
}
.step {
  width: 20px;
  height: 20px;
  margin: 2px 7px 0 0;
  border-radius: 20px;
  background-color: $grey;
  p {
    text-align: center;
  }
}
</style>

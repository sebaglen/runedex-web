<template>
  <div class="mini-widget-container">
    <vue-circle
        class="circle"
        :progress="80"
        :size="120"
        :reverse="false"
        line-cap="round"
        :fill="'#A49066'"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="4.75"
        insert-mode="append"
        :thickness="10"
        :show-percent="false">
        <div>
          <h3>Goal</h3>
          <h1>3/7</h1>
          <p>Dragon Slayer 2</p>
        </div>
      </vue-circle>
  </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress/src/index.vue'

export default {
  components: {
    VueCircle
  },
  props: {
    // use this to fetch proper config and data
    uniqueId: String
  },
  data(){
    return{
      // 
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.mini-widget-container {
  color: $black;
  padding-top: 3px;
}

h1 {
  margin: -5px 0 0 0;
  color: $primary;
}
p {
  margin: -5px 0 0 0;
  max-width: 80px;
}
h3 {
  margin: -5px 0 0 0;
}

</style>

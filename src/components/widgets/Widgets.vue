<template>
  <div :class="[isMobile ? 'mobile' : '', 'widgets']">
      I am a widget panel
  </div>
</template>

<script>

export default {
  computed: {
    isMobile() {
      if (this.window.width <= 750) {
        return false;
      }
      return true;
    }
  },
  data() {
    return {
      window: {
        width: 0,
      }
    }
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widgets {
  width: 400px;
  background-color: $neutral;
}

.mobile {
    // code
}
</style>
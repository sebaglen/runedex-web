<template>
  <div :class="[isMobile ? 'mobile' : '', 'widget']">
    <component
      :is="this.$route.params.widgetType"
      :unique-id="this.$route.params.widgetId"
    />
  </div>
</template>

<script>
import { mainWidgetComponents } from './widgets/widgetUtils'

export default {
  components: { ...mainWidgetComponents },
  data() {
    return {
      window: {
        width: 0
      }
    }
  },
  computed: {
    isMobile() {
      if (this.window.width <= 750) {
        return false
      }
      return true
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget {
  width: 100%;
}

.mobile {
  // code
}
</style>

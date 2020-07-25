<template>
  <div :class="['widget']">
    <div class="widget-header flex-row noselect">
      <img class="hamburger" src="@/assets/img//hamburgerwhite.png" />
      <div class="title">
        {{
          `${this.$route.params.widgetType} - ${this.$route.params.accountId}`
        }}
      </div>
    </div>
    <component
      :is="this.$route.params.widgetType"
      :unique-id="this.$route.params.widgetId"
    />
  </div>
</template>

<script>
import { mainWidgetComponents } from './widgets/widgetUtils'

export default {
  components: { ...mainWidgetComponents }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget-header {
    display: flex;
    height: 40px;
    width: 100%;
    background-color: $primary;
    color: white;
    font-size: 1.2rem;
    .title {
      padding: 5px 0 0 30px;
    }
  }
.hamburger {
  width: 30px;
  height: 30px;
  padding: 5px 0 0 10px;
  cursor: pointer;
}
.widget {
  width: 100%;
}
</style>

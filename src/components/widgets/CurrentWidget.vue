<template>
  <div :class="[isMobile ? 'mobile' : '', 'widget']">
    <div class="widget-header flex-row noselect">
      <img
        class="hamburger"
        src="@/assets/img//hamburgerwhite.png"
      />
      <div class="title">{{`${this.$route.params.widgetType} - ${this.$route.params.accountId}`}}</div>
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
  components: { ...mainWidgetComponents },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget-header {
  display: none;
}
.hamburger {
  width: 30px;
  height: 30px;
  padding: 5px 0 0 10px;
  cursor: pointer;
}
@media only screen and (max-width: 750px) {
  .widget-header {
    display: flex;
    height: 40px;
    width: 100%;
    background-color: $darkest;
    color: white;
    font-size: 1.2rem;
    border-radius: 10px 10px 0 0;
    .title {
      padding: 5px 0 0 30px;
    }
  }
}
.widget {
  width: 100%;
}

.mobile {
  // code
}
</style>

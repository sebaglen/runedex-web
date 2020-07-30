<template>
  <router-link
    :to="{
      name: 'app',
      params: {
        accountId: this.$route.params.accountId,
        widgetType: type,
        widgetId: uniqueId
      }
    }"
  >
    <div class="widget">
      <component :is="type" :unique-id="uniqueId" />
    </div>
  </router-link>
</template>

<script>
import { getWidget, miniWidgetComponents } from '../widgetUtils'

export default {
  components: {
    ...miniWidgetComponents
  },
  props: {
    type: String,
    uniqueId: String
  },
  methods: {
    getWidget
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget {
  min-width: 130px;
  min-height: 130px;
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid $light-grey;
  text-align: center;
  font-size: 0.8em;
  margin: 8px 0 0 8px;
  cursor: pointer;
}
</style>

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
    <div class="widget" @click="maximize">
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
    getWidget,
    maximize() {
      this.$emit('maximize');
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget {
  min-width: 126px;
  min-height: 126px;
  width: 126px;
  height: 126px;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid $light-grey;
  text-align: center;
  font-size: 0.8em;
  cursor: pointer;
}
</style>

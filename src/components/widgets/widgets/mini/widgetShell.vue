<template>
  <div class="widget">
    <component :is="type" :unique-id="uniqueId" />
  </div>
</template>

<script>
import { getWidget, miniWidgetComponents } from '../widgetUtils'
import addNewWidget from './addNewWidget'

export default {
  components: {
    ...miniWidgetComponents,
    addnew: addNewWidget
  },
  props: {
    type: String,
    uniqueId: Number
  },
  methods: {
    getWidget
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget {
  min-width: 140px;
  min-height: 140px;
  width: 140px;
  overflow: hidden;
  border-radius: 10px;
  background-color: $light;
  text-align: center;
  font-size: 0.8em;
  margin: 13px 0 0 13px;
  cursor: pointer;
}
</style>

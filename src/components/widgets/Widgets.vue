<template>
  <div :class="['widgets']">
    <div class="widget-header noselect">
      <div class="title">{{ this.$route.params.accountId }}</div>
    </div>
    <div class="last-seen">
      <div>last seen: 3 hors ago</div>
    </div>
    <div v-if="isFetchingWidgets">Loading...</div>
    <div v-else class="widget-container flex-row">
      <widget-shell
        v-for="widget in currentWidgets"
        :key="widget.id"
        :type="widget.type"
        :unique-id="widget.id"
      ></widget-shell>
      <widget-shell type="addnew"></widget-shell>
    </div>
  </div>
</template>

<script>
import WidgetShell from '@/components/widgets/widgets/mini/widgetShell'
import { mapGetters } from 'vuex'

export default {
  components: { WidgetShell },
  data() {
    return {
      window: {
        width: 0
      }
    }
  },
  computed: {
    ...mapGetters('widgets', ['isFetchingWidgets']),
    ...mapGetters('widgets', ['listWidgets']),
    currentWidgets() {
      return this.listWidgets(this.$route.params.accountId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget-header {
  display: none;
}
@media only screen and (max-width: 750px) {
  .widget-header {
    display: block;
    height: 40px;
    width: 100%;
    background-color: $contrast;
    color: white;
    font-size: 1.2rem;
    border-radius: 10px 10px 0 0;
    .title {
      padding: 5px 0 0 13px;
    }
  }
}
.widgets {
  width: 320px;
  min-width: 320px;
  .widget-container {
    overflow: hidden;
    flex-wrap: wrap;
  }
  .last-seen {
    margin: 5px 0 0 13px;
    color: $light;
    font-size: 14px;
  }
}
</style>

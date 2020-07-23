<template>
  <div :class="[isMobile ? 'mobile' : '', 'widgets']">
    <div class="widget-header noselect">
      <div class="title">{{this.$route.params.accountId}}</div>
    </div>
    <div class="last-seen">
      <div>last seen: 3 hors ago</div>
    </div>
    <div class="widget-container flex-row">
      <widget-shell
        v-for="widget in widgets[this.$route.params.accountId]"
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
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: { WidgetShell },
  data() {
    return {
      window: {
        width: 0
      },
      accountId: null
    }
  },
  computed: {
    ...mapGetters('widgets', ['listWidgets']),
    ...mapState('widgets', ['widgets']),
    isMobile() {
      if (this.window.width <= 750) {
        return false
      }
      return true
    }
  },
  watch: {
    '$route.params.accountId': function() {
      this.$data.accountId = this.$route.params.accountId
      this.getWidgets()
    }
  },
  mounted() {
    this.$data.accountId = this.$route.params.accountId
    this.getWidgets()
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapActions('widgets', ['getWidgets']),
    handleResize() {
      this.window.width = window.innerWidth
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
    background-color: $darkest;
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
    color: $lighter;
    font-size: 14px;
  }
}

.mobile {
  // code
}
</style>

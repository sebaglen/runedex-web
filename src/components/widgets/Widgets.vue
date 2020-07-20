<template>
  <div :class="[isMobile ? 'mobile' : '', 'widgets']">
    <div class="last-seen">
      <div>last seen: 3 hors ago</div>
    </div>
    <div class="widget-container flex-row">
      <widget-shell
        v-for="widget in data"
        :key="widget.uniqueId"
        :type="widget.type"
        :unique-id="widget.uniqueId"
      ></widget-shell>
      <widget-shell type="addnew"></widget-shell>
    </div>
  </div>
</template>

<script>
import WidgetShell from '@/components/widgets/widgets/mini/widgetShell'

export default {
  components: { WidgetShell },
  data() {
    return {
      window: {
        width: 0
      },
      data: [
        {
          uniqueId: 1,
          type: 'bank-value',
          title: 'Bank value',
          permissions: ['bank'],
          config: {}
        },
        {
          uniqueId: 2,
          type: 'total-level',
          title: 'Total level',
          permissions: ['character'],
          config: {}
        },
        {
          uniqueId: 3,
          type: 'xp-gained',
          title: 'Experience gained',
          permissions: ['character'],
          config: {
            time: 'month'
          }
        },
        {
          uniqueId: 4,
          type: 'goal',
          title: 'Complete goal',
          permissions: ['bank', 'character', 'quests'],
          config: {
            levels: [{ attack: 95 }, { strength: 95 }, { defence: 70 }],
            quests: [
              { questId: 'dragon slayer 2' } // get quest id later sometime
            ],
            items: [
              {
                id: 995, // coins
                amount: 60000
              }
            ]
          }
        },
        {
          uniqueId: 5,
          type: 'goal',
          title: 'Complete goal',
          config: {
            levels: [{ attack: 60 }, { strength: 60 }, { defence: 60 }],
            quests: [
              { questId: 'dragon slayer' } // get quest id later sometime
            ],
            items: [
              {
                id: 995, // coins
                amount: 2000
              }
            ]
          }
        }
      ]
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
.widgets {
  width: 420px;
  background-color: $neutral;
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

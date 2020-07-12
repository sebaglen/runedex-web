<template>
    <div :class="[isMobile ? 'mobile' : '', 'widgets']">
        <div class="last-seen">
            <div>last seen: 3 hors ago</div>
        </div>
        <div class="widget-container flex-row">
            <widget-shell v-for="widget in data" :key="widget.uniqueId" :type="widget.type"></widget-shell>
            <widget-shell type="addnew"></widget-shell>
        </div>
    </div>
</template>

<script>
import WidgetShell from '@/components/widgets/widgets/mini/widgetShell'

export default {
  components: { WidgetShell },
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
      },
      data: [
            {
                uniqueId: 1,
                type: "bankvalue",
                title: "Bank value",
                config: {},
            },
            {
                uniqueId: 2,
                type: "totallevel",
                title: "Total level",
                config: {},
            },
            {
                uniqueId: 3,
                type: "xpgained",
                title: "Experience gained",
                config: {
                    time: "month"
                },
            },
            {
                uniqueId: 4,
                type: "goal",
                title: "Complete goal",
                config: {
                    levels: [
                        { attack: 95 },
                        { strength: 95 },
                        { defence: 70 },
                    ],
                    quests: [
                        { questId: "dragon slayer 2" }, // get quest id later sometime
                    ],
                    items: [
                        { 
                            id: 995, // coins
                            amount: 60000
                        },
                    ]
                },
            },
            {
                uniqueId: 5,
                type: "goal",
                title: "Complete goal",
                config: {
                    levels: [
                        { attack: 60 },
                        { strength: 60 },
                        { defence: 60 },
                    ],
                    quests: [
                        { questId: "dragon slayer" }, // get quest id later sometime
                    ],
                    items: [
                        { 
                            id: 995, // coins
                            amount: 2000
                        },
                    ]
                },
            },
      ]
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
  width: 320px;
  background-color: $neutral;
  .widget-container{
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
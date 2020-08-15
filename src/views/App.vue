<template>
  <div 
    class="main"
    v-on:touchstart="dragStart"
    v-on:touchend="dragEnd"
    v-on:touchmove="drag"
  >
    <!--character-panel class="character-panel-container"></character-panel>
    <widget-panel></widget-panel>
    <div v-on:click="select">
      <current-widget v-if="this.$route.params.accountId != 'new'" :class="[isSelected ? 'isSelected' : '', 'widget-wrapper']"></current-widget>
    </div-->
    <div id="scroll" v-bind:style="{ transform: scrollState }" :class="[!active ? 'transition' : '', 'scroll-container flex-row']">
      <div class="left flex-row">
        <character-panel class="character-panel-container"></character-panel>
        <widget-panel></widget-panel>
      </div>
      <div class="right">
        <current-widget v-if="this.$route.params.accountId !== 'new'" v-bind:style="{ background: fadeState, height: '100%'  }"></current-widget>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterPanel from '@/components/characterPanel/CharacterPanel'
import WidgetPanel from '@/components/widgets/WidgetPanel'
import CurrentWidget from '@/components/widgets/CurrentWidget'

export default {
  components: { CharacterPanel, WidgetPanel, CurrentWidget }, // eslint-disable-line
  data() {
    return {
      active: false,
      currentX: null,
      initialCurrentX: 0,
      initialX: null,
      xOffset: 0,
    }
  },
  methods: {
    minimize() {
      this.currentX = (window.innerWidth - 50) * -1
      this.xOffset = this.currentX;
    },
    maximize() {
      this.currentX = 0;
      this.xOffset = this.currentX;
    },
    dragStart(e) {
      if (e.type === "touchstart") {
        this.initialX = e.touches[0].clientX - this.xOffset;
        this.initialCurrentX = this.currentX;
      } else {
        this.initialX = e.clientX - this.xOffset;
      }
      this.active = true;
    },

    drag(e) {
      if (this.active) {
      
        e.preventDefault();
        // If Touch
        if (e.type === "touchmove") {
          // Dont go further left than minimum
          if (e.touches[0].clientX - this.initialX < 0) {
            // Dont go further right than maximum if trying to go right, but evade if trying to go left to avoid lock.
            if (((this.currentX - 51) * -1) >= window.innerWidth && e.touches[0].clientX < this.previousDraggedX) {
              // Set max right
              this.currentX = (window.innerWidth - 50) * -1;
            } else {
              // Is either not at max right, or is at max right, but trying to go left.
              this.currentX = e.touches[0].clientX - this.initialX;
            }
            // Memorize previous x to validate if future x is going left or right
            this.previousDraggedX = e.touches[0].clientX;
          } else {
            this.currentX = 0;
          }
        }
        /* DISABLED mouse drag for now

        // Else if mouse
        // Dont go further left than minimum
        else if (e.clientX - this.initialX < 0) {
          // Dont go further right than maximum if trying to go right, but evade if trying to go left to avoid lock.
          if (((this.currentX - 51) * -1) >= window.innerWidth && e.clientX < this.previousDraggedX) {
            // Set max right
            this.currentX = (window.innerWidth - 50) * -1;
          } else {
            // Is either not at max right, or is at max right, but trying to go left.
            this.currentX = e.clientX - this.initialX;
          }
          // Memorize previous x to validate if future x is going left or right
          this.previousDraggedX = e.clientX;
        } else {
          this.currentX = 0;
        }
        */
        this.xOffset = this.currentX;
      }
    },

    dragEnd() {
      // If not clicked, but dragged.
      if (this.currentX !== this.initialCurrentX) {
        // If cursor/finger is moving towards the right
        if (this.currentX > this.initialCurrentX) {
          this.currentX = 0;
          this.xOffset = this.currentX;
        } 
        // If cursor/finger is moving towards the left
        else {
          this.currentX = (window.innerWidth - 50) * -1;
          this.xOffset = this.currentX;
        }
      }
      this.initialX = this.currentX;
      this.active = false;
    },
  },
  computed: {
    scrollState() {
      return `translate(${this.currentX}px)`
    },
    fadeState() {
      const max = (window.innerWidth - 50); // eslint-disable-line
      const current = this.currentX * -1; // eslint-disable-line
      const fade = 0.2-(current/max)*0.2 // eslint-disable-line
      return `rgba(0, 0, 0, ${fade})`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.main {
  height: 100%;
  width: 100vw;
  overflow: hidden;
  .scroll-container {
    width: calc(100vw + calc(100vw - 50px));
    height: 100%;
    .left {
      width: calc(100vw - 50px);
    }
    .right {
      width: 100vw;
    }
  }
  .transition {
    transition: transform 200ms cubic-bezier(.69,.15,.46,1);
  }
  .hug-left {
    transform: translate(calc(-100vw + 50px)) !important;
  }
  .hug-right {
    transform: translate(0) !important;
  }
}
</style>

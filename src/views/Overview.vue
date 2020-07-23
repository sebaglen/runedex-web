<template>
  <div class="page-wrapper flex-row">
    <character-panel class="character-panel-container"></character-panel>
    <widgets class="mini-widget-container"></widgets>
    <div class="widget-container" v-on:click="select">
      <current-widget :class="[isSelected ? 'isSelected' : '', 'widget-wrapper']"></current-widget>
    </div>
  </div>
</template>

<script>
import CharacterPanel from '@/components/characterPanel/CharacterPanel'
import Widgets from '@/components/widgets/Widgets'
import CurrentWidget from '@/components/widgets/CurrentWidget'

export default {
  components: { CharacterPanel, Widgets, CurrentWidget },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    select() {
      if (window.innerWidth > 750) {
        return;
      }
      this.isSelected = !this.isSelected;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-panel-container {
  // code
}
.mini-widget-container {
  background-color: $dark;
  border-radius: 10px 10px 0 0;
  margin-right: 5px;
}
.widget-container {
  height: 100%;
  width: 100%;
}
.page-wrapper {
  height: 100%;
}
.widget-wrapper {
  background-color: $dark;
  height: 100%;
  width: 100%;
  border-radius: 10px 0 0 0;
}
@media only screen and (max-width: 750px) {
  .widget-wrapper {
    z-index: 100;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 40px;
    left: 0;
    
    transition: left 300ms ease;
    border-radius: 10px 10px 0 0;
  }
  .isSelected {
    left: 405px;
  }
}
</style>

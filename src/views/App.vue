<template>
  <div class="page-wrapper flex-row">
    <character-panel class="character-panel-container"></character-panel>
    <widget-panel></widget-panel>
    <div v-on:click="select">
      <current-widget v-if="this.$route.params.accountId != 'new'" :class="[isSelected ? 'isSelected' : '', 'widget-wrapper']"></current-widget>
    </div>
  </div>
</template>

<script>
import CharacterPanel from '@/components/characterPanel/CharacterPanel'
import WidgetPanel from '@/components/widgets/WidgetPanel'
import CurrentWidget from '@/components/widgets/CurrentWidget'

export default {
  components: { CharacterPanel, WidgetPanel, CurrentWidget },
  data() {
    return {
      isSelected: true,
    }
  },
  methods: {
    select() {
      if (window.innerWidth > 750) { // TODO: checks for mobile, fix this.
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
.widget-container {
  height: 100%;
  width: 100%;
}
.page-wrapper {
  height: 100%;
  width: 100%;
}
.widget-wrapper {
  background-color: $light-grey;
  width: 100%;
  border-radius: 10px 0 0 0;
}
@media only screen and (max-width: 750px) {
  .widget-wrapper {
    z-index: 100;
    position: fixed;
    right: 0;
    top: 0;
    bottom: $navbar-height;
    left: 0;
    
    transition: left 300ms ease;
    border-radius: 10px 10px 0 0;
  }
  .isSelected {
    left: calc(350px);
  }
}
@media only screen and (max-width: 460px) {
  .widget-wrapper {
    transition: left 100ms ease;
  }
  .isSelected {
    left: calc(350px);
  }
}
</style>

<template>
  <div class="page-wrapper flex-row">
    <character-panel></character-panel>
    <widgets></widgets>
    <current-widget></current-widget>
  </div>
</template>

<script>
import CharacterPanel from '@/components/characterPanel/CharacterPanel'
import Widgets from '@/components/widgets/Widgets'
import CurrentWidget from '@/components/widgets/CurrentWidget'

export default {
  components: { CharacterPanel, Widgets, CurrentWidget }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.page-wrapper {
  height: 100%;
}
</style>

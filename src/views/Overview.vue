<template>
  <div class="page-wrapper flex-row">
    <character-panel></character-panel>
    <widgets></widgets>
  </div>
</template>

<script>
import CharacterPanel from '@/components/characterPanel/CharacterPanel'
import Widgets from '@/components/widgets/Widgets'

export default {
  components: { CharacterPanel, Widgets },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.page-wrapper {
  height: 100%;
}
</style>

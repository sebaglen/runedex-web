<template>
  <div class="character-panel">
    <character-header></character-header>
  </div>
</template>

<script>
import CharacterHeader from '@/components/characterPanel/header/CharacterHeader'

export default {
  components: { CharacterHeader }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-panel {
  background-color: lightblue;
  width: 100%;
  
}
</style>

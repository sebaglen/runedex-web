<template>
  <div class="character-panel">
    <character-header class="character-header"></character-header>
    <character class="character"></character>
  </div>
</template>

<script>
import CharacterHeader from '@/components/characterPanel/header/CharacterHeader'
import Character from '@/components/characterPanel/Character'

export default {
  components: { CharacterHeader, Character }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-panel {
  width: 100%;
  .character-header {
     background-color: $light-brown;
  }
}
</style>

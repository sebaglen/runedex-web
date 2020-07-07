<template>
  <div class="flex-row">
    <character class="char-item"></character>
    <character class="char-item"></character>
    <character class="char-item"></character>
  </div>
</template>

<script>
import Character from '@/components/characterPanel/header/Character'

export default {
  components: { Character }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.char-item {
    margin: 20px;
}
</style>

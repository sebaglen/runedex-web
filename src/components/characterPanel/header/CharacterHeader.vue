<template>
  <div class="flex-row">
    <character class="char-item" :characterName="`Iron Synkie`"></character>
    <character class="char-item" :characterName="`Lil Synkie`"></character>
    <add-new-character class="char-item"></add-new-character>
  </div>
</template>

<script>
import Character from '@/components/characterPanel/header/Character'
import AddNewCharacter from '@/components/characterPanel/header/AddNewCharacter'

export default {
  components: { Character, AddNewCharacter }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.char-item {
    margin: 10px 0 10px 10px;
}
</style>

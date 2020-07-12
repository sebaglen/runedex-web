<template>
  <div class="character-panel flex-column">
    <select-character class="char-item" :characterName="`Iron Synkie`"></select-character>
    <select-character class="char-item" :characterName="`Lil Synkie`"></select-character>
    <add-new-character class="char-item"></add-new-character> 
  </div>
</template>

<script>
import SelectCharacter from '@/components/characterPanel/header/SelectCharacter'
import AddNewCharacter from '@/components/characterPanel/header/AddNewCharacter'

export default {
  components: { SelectCharacter, AddNewCharacter },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-panel {
  z-index: 20;
  background-color: $dark;
}

.char-item {
  margin: 10px;
}
</style>
<template>
  <div class="character-panel flex-column">
    <select-character
      v-for="account in accounts"
      :key="account.id"
      class="char-item"
      :character-name="account.id"
    ></select-character>
    <add-new-character class="char-item"></add-new-character>
  </div>
</template>

<script>
import SelectCharacter from '@/components/characterPanel/header/SelectCharacter'
import AddNewCharacter from '@/components/characterPanel/header/AddNewCharacter'
import { mapState } from 'vuex'

export default {
  components: { SelectCharacter, AddNewCharacter },
  computed: {
    ...mapState('accounts', ['accounts'])
  }
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

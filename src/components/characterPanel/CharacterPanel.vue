<template>
<div class="outer">
  <div class="inner flex-column">
    <select-character
      v-for="account in accounts"
      :key="account.id"
      class="char-item"
      :character-name="account.id"
    ></select-character>
    <router-link to="/app/new">
      <add-new-character class="char-item"></add-new-character>
    </router-link>
  </div>
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
.outer {
  display: table;
  height: 100%;
  width: 65px;
  background-color: $neutral;
}
.inner {
  display: table-cell;
  vertical-align: middle;
}

.char-item {
  margin: 10px;
}
</style>

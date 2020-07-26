<template>
<div class="outer">
  <div class="inner flex-column">
    <select-character
      v-for="account in accounts"
      :key="account.id"
      class="char-item"
      :character-name="account.id"
    ></select-character>
    <select-character
      :key="'new'"
      class="char-item"
      :character-name="'new'"
    ></select-character>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import SelectCharacter from '@/components/characterPanel/header/SelectCharacter'

export default {
  components: { SelectCharacter },
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
</style>

<template>
  <div class="page-wrapper">
    <character-panel class="char-panel"></character-panel>
  </div>
</template>

<script>
import CharacterPanel from '@/components/characterPanel/CharacterPanel'

export default {
  components: { CharacterPanel },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.account-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

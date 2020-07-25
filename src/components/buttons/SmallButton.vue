<template>
  <div class="button" @click="$emit('clicked')">
      {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.button {
  cursor: pointer;
  color: $black;
  background-color: $white;
  border-radius: 40px;
  padding: 10px;
}
</style>

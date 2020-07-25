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
  color: $white;
  background-color: $primary;
  border-radius: 80px;
  padding: 10px 40px 10px 40px;
  text-align: center;
  font-size: 24px;
}
</style>

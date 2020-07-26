<template>
  <div :class="[color === 'white' ? 'white' : color === 'grey' ? 'grey' : 'white', 'button']" @click="$emit('clicked')">
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.button {
  cursor: pointer;
  color: $black;
  border-radius: 40px;
  padding: 10px 20px 10px 20px;
  text-align: center;
  font-size: 18px;
}
.white {
  background-color: $white;
}
.grey {
  background-color: $light-grey;
}
</style>

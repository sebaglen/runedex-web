<template>
  <div class="character-wrapper">
    %name%
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: $green;
    padding: 20px;
    text-align: center;
    font-size: 0.8em;
}
</style>

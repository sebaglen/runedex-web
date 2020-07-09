<template>
  <div class="sideMenu">
    THIS IS A SIDE MENU
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.sideMenu {
  z-index: 20;
  height: calc(100% - $navbar-height);
  width: 200px;
  background-color: $gray;
  margin-top: $navbar-height;
  box-sizing: border-box;

}
</style>

<template>
  <div>
    <div class="character-wrapper">
      <img
          class="plus-icon"
          src="@/assets/img/add.png"
        />
    </div>
    <div class="character-name">New</div>
  </div>
  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 7px;
  background-color: $neutral;
  text-align: center;
  font-size: 0.8em;
  cursor: pointer;
}
.character-name {
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  color: $light;
}
.plus-icon {
  padding-top: 21px;
  width: 20px;
  height: 20px;
}
</style>

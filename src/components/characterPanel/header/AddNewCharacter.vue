<template>
  <div>
    <div class="character-wrapper">
      <img
          class="plus-icon"
          src="@/assets/icons/plus.svg"
        />
    </div>
    <small class="character-name">New</small>
  </div>
  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-wrapper {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: $white;
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
  color: $black;
}
.plus-icon {
  padding: 13px;
  width: 20px;
  height: 20px;
}
</style>

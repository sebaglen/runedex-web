<template>
  <div>
    <div class="character-wrapper">
      <img
          class="plus-icon"
          src="@/assets/img/add.png"
        />
    </div>
    <div class="character-name">Add new</div>
  </div>
  
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 7px;
  background-color: $neutral;
  text-align: center;
  font-size: 0.8em;
  cursor: pointer;
}
.character-name {
  width: 100%;
  text-align: center;
  color: $lighter;
}
.plus-icon {
  padding-top: 25px;
  width: 30px;
  height: 30px;
}
</style>

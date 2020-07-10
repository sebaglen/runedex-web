<template>
  <div>
    <div class="character-wrapper">
      <img
          class="player-icon"
          src="@/assets/img/person.png"
        />
    </div>
    <div class="character-name">{{characterName}}</div>
  </div>
  
</template>

<script>
export default {
  props: {
    characterName: String,
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.character-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 7px;
  background-color: $brown;
  text-align: center;
  font-size: 0.8em;
  cursor: pointer;
}
.character-name {
  width: 100%;
  text-align: center;
}
.player-icon {
  width: 80px;
  height: 80px;
}
</style>

<template>
  <div>
    <router-link
      :to="{ name: 'app', params: { accountId: characterName } }"
    >
      <div class="character-wrapper">
        <img class="player-icon" src="@/assets/img/person.png" />
      </div>
      <div class="character-name">{{ characterName }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    characterName: String
  }
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
.player-icon {
  width: 60px;
  height: 60px;
}
</style>

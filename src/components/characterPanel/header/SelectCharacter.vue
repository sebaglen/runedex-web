<template>
  <div>
    <router-link
      :to="{ name: 'app', params: { accountId: characterName } }"
    >
      <div class="character-wrapper">
        <img class="player-icon" src="@/assets/img/person.png" />
      </div>
      <small class="character-name">{{ characterName }}</small>
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
.player-icon {
  width: 45px;
  height: 45px;
}
</style>

<template>
  <div>
    <router-link
      :to="{ name: 'app', params: { accountId: characterName } }"
    >
      <div class="flex-row">
        <div v-if="this.$route.params.accountId == characterName" class="active"></div>
        <div v-else class="not-active"></div>
        <div class="character-container">
          <div class="character-wrapper">
            <img v-if="characterName != 'new'" class="player-icon" src="@/assets/img/person.png" />
            <img
              v-else
              class="plus-icon"
              src="@/assets/icons/plus.svg"
            />
          </div>
          <small class="character-name">{{ characterName }}</small>
        </div>
      </div>
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
.character-container {
  margin: 10px 10px 10px 6px;
}
.character-wrapper {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: $white;
  text-align: center;
  font-size: 0.8em;
  cursor: pointer;
}
.active {
  width: 4px;
  height: 30px;
  margin-top: 18px;
  background-color: $contrast;
  border-radius: 0px 5px 5px 0px;
}
.not-active {
  width: 4px;
  height: 0
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
.plus-icon {
  padding: 13px;
  width: 20px;
  height: 20px;
}
</style>

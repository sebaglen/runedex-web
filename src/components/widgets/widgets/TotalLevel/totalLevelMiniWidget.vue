<template>
  <div class="mini-widget-container">
    <h3>Combat level</h3>
    <div class="flex-row">
      <p>Week</p>
      <h3 class="gain">+ 4</h3>
    </div>
    <h1>{{totalXp}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('accounts', ['getAccountById']),
    totalXp() {
      return this.getAccountById(this.$route.params.accountId).character.combatLevel;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.mini-widget-container {
  text-align: left;
  color: $black;
  margin: 10px;
}

h1 {
  color: $primary;
  text-align: center;
  margin-top: -4px;
}

.gain {
  color: $primary;
  margin: -5px 0 0 auto;
  text-align: right;
}
</style>

<template>
  <div class="outer">
    <div class="inner">
      <h2>Link new OSRS account</h2>
      <div class="split"/>
      <div class="break-8" />
      <p>Enter the in-game name of the Old School RuneScape account you want to link.</p>
      <input
        placeholder="Account name"
        class="account-name-input"
        type="text"
        :value="accountNameToRegister"
        @input="setAccountNameToRegister($event.target.value)"
        @keypress.enter="register()"
      />
      <div class="break-8" />
      <div v-if="user.auth && user.auth.pin">
        <p>PIN: {{ user.auth.pin }}</p>
      </div>

      <div @click="register()">
        <small-button 
          :class="{ disabled: accountRegistrationPending }"
          :disabled="!!accountRegistrationPending"
          class="add-account-btn"
          :text="'Add account'"
          :color="'grey'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import SmallButton from '@/components/buttons/SmallButton'

export default {
  components: { SmallButton },
  computed: {
    ...mapState('accounts', [
      'accountNameToRegister',
      'accountRegistrationPending'
    ]),
    ...mapState('authentication', ['user'])
  },
  methods: {
    ...mapMutations('accounts', ['setAccountNameToRegister']),
    ...mapActions('accounts', ['triggerRegisterAccountAction']),
    register() {
      this.$router.push({ name: 'app', params: {accountId: this.accountNameToRegister }})
      this.triggerRegisterAccountAction();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.outer {
  display: table;
  height: 100%;
  width: 100%;
  padding: 0 0 0 10px
}
.inner {
  display: table-cell;
  vertical-align: middle;
  h2 {
    margin-bottom: 8px;
  }
}
.account-name-input {
    padding-left: 6px;
    height: 17px;
    width: 150px;
    outline: none;
    font: inherit;
    font-size: 9px;
    border: 1px solid;
    border-color: $grey;
    background-color: $light-grey;
  }
.add-account-btn {
  font-size: 9px;
  width: 60px;
}
.split {
  width: 100%;
  margin: 0 0 0 -10px;
}
</style>

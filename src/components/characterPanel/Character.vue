<template>
  <div class="page-wrapper">
    <input
      placeholder="Account name..."
      class="account-name-input"
      type="text"
      :value="accountNameToRegister"
      @input="setAccountNameToRegister($event.target.value)"
      @keypress.enter="triggerRegisterAccountAction"
    />
    <button
      :class="{ disabled: accountRegistrationPending }"
      :disabled="!!accountRegistrationPending"
      class="add-account-btn"
      @click="triggerRegisterAccountAction"
    >
      Add account
    </button>
    <p>PIN: {{ pin }}</p>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('accounts', [
      'accountNameToRegister',
      'accountRegistrationPending',
      'pin'
    ]),
    ...mapState('authentication', ['pin'])
  },
  methods: {
    ...mapMutations('accounts', ['setAccountNameToRegister']),
    ...mapActions('accounts', ['triggerRegisterAccountAction'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.account-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .account-name-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .add-account-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>

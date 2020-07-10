<template>
  <div class="page-wrapper">
    <input
      placeholder="Account name..."
      class="account-name-input"
      type="text"
      :value="accountNameToAdd"
      @input="setAccountNameToAdd($event.target.value)"
      @keypress.enter="triggerAddAccount"
    />
    <button
      :class="{ disabled: accountCreationPending }"
      :disabled="!!accountCreationPending"
      class="add-account-btn"
      @click="triggerAddAccount"
    >
      Add account
    </button>
    <p>PIN: {{ pin }}</p>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/functions'

export default {
  data() {
    return {
      accountNameToAdd: '',
      accountCreationPending: false,
      pin: ''
    }
  },
  methods: {
    setAccountNameToAdd(input) {
      this.$data.accountNameToAdd = input
    },
    async triggerAddAccount() {
      this.$data.accountCreationPending = true
      firebase
        .functions()
        .httpsCallable('registerAccount')({
          accountName: this.$data.accountNameToAdd
        })
        .then(result => {
          const randomPin = result.data.pin
          this.$data.pin = randomPin
          this.$data.accountCreationPending = false
        })
    }
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

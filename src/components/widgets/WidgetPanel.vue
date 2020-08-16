<template>
  <div>
    <add-new-account v-if="addNewAccount"></add-new-account>
    <widgets @maximize="maximize" v-else></widgets>
  </div>
</template>

<script>
import Widgets from '@/components/widgets/Widgets'
import AddNewAccount from '@/components/widgets/AddNewAccount'

export default {
  components: { Widgets, AddNewAccount },
  computed: {
    addNewAccount() {
      if (this.$route.params.accountId === "new") {
        return true;
      }
      return false;
    }
  },
  methods: {
    maximize() {
      this.$emit('maximize');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
</style>

<template>
  <div class="panel">
    <add-new-account v-if="addNewAccount" class="mini-widget-container"></add-new-account>
    <widgets v-else class="mini-widget-container"></widgets>
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.panel {
  display: table;
  height: 100%;
  width: 65px;
}
</style>

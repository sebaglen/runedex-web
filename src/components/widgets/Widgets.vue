<template>
<div class="outer">
  <div :class="['widgets']">
    <div class="margin noselect">
      <h2>{{ this.$route.params.accountId }}</h2>
      <div class="last-seen">
        <p>last seen: 3 hors ago</p>
      </div>
    </div>
    <div class="split"/>
    <div v-if="isFetchingWidgets">Loading...</div>
    <div v-else class="widget-container flex-row">
      <widget-shell
        v-for="widget in currentWidgets"
        :key="widget.id"
        :type="widget.type"
        :unique-id="widget.id"
      ></widget-shell>
      <large-button class="browse-button margin" :text="'Browse widgets'"/>
    </div>
    <div class="break-9" />
    <div class="split"/>
    <div class="break-9" />
    <div @click="deleteAcc()" class="menu-button margin flex-row">
      <img
        class="img"
        src="@/assets/icons/exit.svg"
      />
      <h3>Remove {{ this.$route.params.accountId }}</h3>
    </div>
  </div>
</div>
</template>

<script>
import LargeButton from '@/components/buttons/LargeButton'
import WidgetShell from '@/components/widgets/widgets/mini/widgetShell'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { WidgetShell, LargeButton },
  data() {
    return {
      window: {
        width: 0
      }
    }
  },
  methods: {
    ...mapActions('accounts', ['deleteAccount']),
    deleteAcc() {
      this.deleteAccount(this.$route.params.accountId);
      this.$router.push({ name: 'app', params: { accountId: 'new' }})
    }
  },
  computed: {
    ...mapGetters('widgets', ['isFetchingWidgets']),
    ...mapGetters('widgets', ['listWidgets']),
    currentWidgets() {
      return this.listWidgets(this.$route.params.accountId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.outer {
  display: table;
  height: 100%;
  width: 65px;
}
.margin {
  margin: 0 10px 0 10px;
}
.widgets {
  min-width: 285px;
  display: table-cell;
  vertical-align: middle;
  .img {
    width: 20px;
    height: 20px;
    padding-right: 6px;
  }
  .widget-container {
    overflow: hidden;
    flex-wrap: wrap;
    .browse-button {
      width: 100%;
      margin-top: 10px;
    }
  }
  .last-seen {
    padding-left: 7px;
    color: $black;
  }
  .menu-button {
    cursor: pointer;
  }
}
</style>

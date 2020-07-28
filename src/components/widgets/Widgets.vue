<template>
<div class="page-wrapper">
  <div :class="['widgets']">
    <div class="margin noselect">
      <h2>{{ this.$route.params.accountId }}</h2>
      <div class="last-seen">
        <p v-if="hasAccountData">Last seen: {{ getLastSeen }}</p>
        <p v-else>Not yet synchronized, please log in to RuneLite.</p>
      </div>
    </div>
    <div class="split"/>
    <div v-if="isFetchingWidgets">Loading...</div>
    <div v-else>
      <awaiting-first-login class="margin" v-if="!hasAccountData"></awaiting-first-login>
      <div v-else class="widget-container flex-row">
        <widget-shell
          v-for="widget in currentWidgets"
          :key="widget.id"
          :type="widget.type"
          :unique-id="widget.id"
        ></widget-shell>
        <large-button class="browse-button margin" :text="'Browse widgets'"/>
      </div>
    </div>
    <div class="break-8" />
    <div class="split"/>
    <div class="break-8" />
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
import AwaitingFirstLogin from '@/components/widgets/AwaitingFirstLogin'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { WidgetShell, LargeButton, AwaitingFirstLogin },
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
    ...mapState('accounts', ['accounts']),
    currentWidgets() {
      return this.listWidgets(this.$route.params.accountId)
    },
    hasAccountData() {
      return this.accounts && this.accounts.some(el => el.id === this.$route.params.accountId && el.lastSeen);
    },
    getLastSeen() {
      const lastSeen = this.accounts && this.accounts.find(el => el.id === this.$route.params.accountId).lastSeen;
      const interval = Date.now() - lastSeen;

      const seconds = (interval / 1000).toFixed(1);
      const minutes = Math.floor((interval / (1000 * 60)).toFixed(1));
      const hours = Math.floor((interval / (1000 * 60 * 60)).toFixed(1));
      const days = Math.floor((interval / (1000 * 60 * 60 * 24)).toFixed(1));

      if (seconds < 60) {
        if (seconds === 1) {
          return seconds + " second ago"; // eslint-disable-line
        }
        return seconds + " seconds ago"; // eslint-disable-line
      }
      if (minutes < 60) {
        if (minutes === 1) {
          return minutes + " minute ago"; // eslint-disable-line
        }
        return minutes + " minutes ago"; // eslint-disable-line
      }
      if (hours < 24) {
        if (hours === 1) {
          return hours + " hour ago"; // eslint-disable-line
        }
        return hours + " hours ago"; // eslint-disable-line
      }
      if (days === 1) {
        return days + " day ago"; // eslint-disable-line
      }
      return days + " days ago" // eslint-disable-line
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.page-wrapper {
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

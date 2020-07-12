<template>
  <header class="navbar" :class="{ offline: !networkOnLine }">
    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link to="/overview">
            <rune-dex-router-item></rune-dex-router-item>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/news">
            <news-router-item></news-router-item>
          </router-link>
        </div>
      </nav>

      <img
        v-if="isUserLoggedIn && networkOnLine"
        class="user-picture can-hide"
        :src="user.photoURL"
        alt="Avatar"
      />
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex'
import RuneDexRouterItem from '@/components/routerItems/RuneDexRouterItem'
import NewsRouterItem from '@/components/routerItems/NewsRouterItem'

export default {
  components: { RuneDexRouterItem, NewsRouterItem },
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle'])
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.navbar {
  background-color: $darker;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

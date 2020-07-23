<template>
  <header class="navbar" :class="{ offline: !networkOnLine }">
    <div class="desktop-navbar flex-row">
      <div class="logo-container">
        <img
          class="logo"
          src="@/assets/RD.png"
        />
      </div>
      <h2 class="title">Iron Synkie</h2>
    </div>

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
        <div v-if="!isUserLoggedIn && networkOnLine" class="nav-item">
          <router-link to="/login">Login</router-link>
        </div>
        <div
          v-if="isUserLoggedIn && networkOnLine"
          class="nav-item logout-item"
          @click="logout"
        >
          <a>Logout</a>
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
    ...mapState('app', ['networkOnLine'])
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
.logo-container {
  width: 80px;
  .logo {
    padding: 2px 0 0 7px;
    height: 35px;
    width: 40px;
  }
}
.title {
  margin: 0 0 0 6px;
  color: $lighter;
  font-weight: 350;
}
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: $darkest;
}
.desktop-navbar {
  width: 400px;
  height: 40px;
  background-color: $darkest;
}
</style>

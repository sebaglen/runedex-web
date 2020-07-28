<template>
  <header class="navbar" :class="{ offline: !networkOnLine }">
    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link to="/app/dex">
            <rune-dex-router-item></rune-dex-router-item>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/app/news">
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
  z-index: 200;
  height: $navbar-height;
  background-color: $contrast;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .links {
    padding-left: 1.5rem;
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    display: flex;

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
      }
    }
  }

  .user-picture {
    max-height: 32px;
    margin-left: 1.5rem;
    border-radius: 50%;
  }

  .offline-label {
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 1.5rem;
  }
}

@media only screen and (min-width: 751px) {
  .navbar {
    display: none;
  }
}
</style>

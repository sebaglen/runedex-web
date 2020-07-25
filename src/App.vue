<template>
  <div id="app">

    <div v-if="!this.$route.meta.hideNavBar">
      <nav-bar class="navbar"></nav-bar>
      <div class="navbar-padding"></div>
      <mobile-nav-bar class="mobile-navbar"></mobile-nav-bar>
    </div>

    <router-view :class="[!this.$route.meta.hideNavBar ? 'router' : '']" />





    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import MobileNavBar from '@/components/MobileNavBar'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { NavBar, MobileNavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp']),
  },
  methods: {
    ...mapActions('app', [
      'closeAddToHomeScreenModalForApple',
      'serviceWorkerSkipWaiting'
    ]),
  },
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';

body {
  margin: 0;

  a {
    font-weight: 500;
    text-decoration: none;
  }

  #app {
    background-color: $light;
    font-family: Roboto, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;

    .mobile-padding {
      height: $navbar-height;
      width: 100%;
    }

    .router {
      height: calc(100% - 40px); // should be $navbar-height bue doesnt work for some reason ????
    }

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    .content-wrapper {
      width: 100%;

      .navbar {
        display: block;
      }
      .mobile-navbar {
        display: none;
      }
      .navbar-padding {
        height: 40px;
        width: 100%
      }

      

      @media only screen and (max-width: 750px) {
        .navbar {
          display: none;
        }
        .mobile-navbar {
          display: block;
        }
        .navbar-padding {
          display: none;
        }
      }
    }
  }
}
</style>

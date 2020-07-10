<template>
  <div class="sideMenu">
      <div class="links">
        <nav class="nav-links">
          <div class="nav-item">
            <router-link to="/overview">Overview</router-link>
          </div>
          <div class="nav-item">
            <router-link to="/news">News</router-link>
          </div>
          <div class="nav-item">
            <router-link to="/watchlist">Watchlist</router-link>
          </div>
        </nav>
      </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.sideMenu {
  z-index: 20;
  height: calc(100% - $navbar-height);
  width: 200px;
  background-color: $gray;
  margin-top: $navbar-height;
}

.links {
    padding-left: 1.5rem;
    font-size: 0.9rem;

    .nav-links {
      padding-top: 30px;

      .nav-item {
        margin-left: 1.5rem;
        line-height: 2.5rem;

        a {
          font-size: 1.2rem;
          text-decoration: none;
          color: $navbar-link-color;
          border-color: #2c3e50;
          line-height: 1.4rem;
          display: inline-block;
          cursor: pointer;
        }

        @mixin activatedLink() {
          margin-bottom: -2px;
          border-bottom: 2px solid $dark-brown;
          margin-left: 10px;
        }

        .router-link-active {
          @include activatedLink;
        }

        @media (hover) {
          :hover {
            @include activatedLink;
          }
        }
      }
    }
  }
</style>

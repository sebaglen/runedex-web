<template>
  <div class="page-wrapper">
    <div class="header">
      <router-link to="/app">
          <small-button class="button" :text="'Open RuneDex'"></small-button>
        </router-link>
      <div class="header-filter">
        <div class="title">Your account sitter</div>
        <p class="description">Whether you´re an Ironman, main account, market flipper or just enjoy farming cowhides, RuneDex makes it easy to monitor your progression, notify you of big bank- and item value changes, give status on user-configured tasks and much more.</p>
      </div>

    </div>
    <div class="content">
      <div class="section">
        <div class="section-container">content</div>
      </div>
      <div class="section contrast">
        <div class="section-container">content</div>
      </div>
      <div class="section">
        <div class="section-container">content</div>
      </div>
      <div class="section contrast">
        <div class="section-container">content</div>
      </div>
    </div>
    <div class="footer">
      footer
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import SmallButton from '@/components/buttons/SmallButton'

export default {
  components: { SmallButton },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle']),
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  margin: auto;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 305px) { // Mobile
    width: 305px;
  }
  
  .header {
    height: 550px;
    color: $white;
    text-align: center;

    background-image: url("../assets/img/adventure.png");
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size:  cover;
    -o-background-size: cover;
    background-size: cover;

    .button {
      position: absolute;
      top: 20px;
      right: 40px;
      @media only screen and (max-width: 420px) { // Mobile
        top: 10px;
        right: 20px;
      }
    }

    .header-filter {
      background: rgba(0, 0, 0, 0.4);
      height: inherit;
    }
    .title {
      // font-family: SeoulNamsan CEB;
      font-weight: bold;
      letter-spacing: -0.05em;
      font-size: 60px;
      padding: 150px 0 25px 0;
    }
    .description {
      font-size: 24px;
      max-width: 1000px;
      margin: auto;
      padding: 0 150px 0 150px;
    }
    @media only screen and (max-width: 690px) { // Desktop-slim or Tablet
      height: 700px;
      text-align: left;
      .title {
        padding: 120px 25px 25px 25px;
      }
      .description {
        padding: 0 25px 0 25px;
      }
    }
    @media only screen and (max-width: 420px) { // Mobile
      height: 900px;
    }
  }
  .content {
    text-align: left;
    .section {
      position: relative;
      height: 600px;
      @media only screen and (max-width: 690px) { // Desktop-slim or Tablet
        height: 750px;
      }

      .section-container {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        background-color: burlywood;

        width: 760px;
        @media only screen and (max-width: 920px) { // Dekstop
          width: 600px;
        }
        @media only screen and (max-width: 690px) { // Desktop-slim or Tablet
          width: 400px;
        }
        @media only screen and (max-width: 420px) { // Mobile
          width: 100%
        }
      }
    }
    .contrast {
      background-color: $neutral;
    }
  }
  .footer {
    background-color: $contrast;
  }
}
</style>

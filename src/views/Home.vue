<template>
  <div class="page-wrapper">
    <div class="header">
      <div @click="logInTop()">
        <small-button class="button" :text="'Open RuneDex'"></small-button>
        <div :class="[isTop ? 'expand' : '', 'expand-container']"></div>
      </div>
      <div class="header-filter">
        <div class="title">Your account sitter</div>
        <p class="description">Whether you´re an Ironman, main account, market flipper or just enjoy farming cowhides, RuneDex makes it easy to monitor your progression, notify you of big bank- and item value changes, give status on user-configured tasks and much more.</p>
      </div>

    </div>
    <div class="content">
      <div class="section">
        <div class="section-container">
          <div class="section-title">Dont miss out next time items crash on the GE</div>
          <p>You can ask RuneDex to automatically send push notifications to your phone or desktop when items you own crash or spike on the Grand Exchange. Never miss another market crash again while at school or work</p>
        </div>
      </div>
      <div class="contrast">
        <div class="section">
          <div class="section-container">
            <div class="section-title right-align">Monitor your own progression goals</div>
            <p class="right-align">RuneDex can keep track of your levels, quests completions, items you own and much more. Build a unique platform to track all the goals you wish to achive, and view your current progression towards those goals. Maybe you wanna know how far away you are from starting the barrows grind on your new Ironman?</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-container">
          <div class="section-title">Get inspiration on what to do next!</div>
          <p>Ever wondered if there are any quests you have the level and item requirements banked for, but have not yet started? Get tailored progression tips for all your accounts, its easy!</p>
        </div>
      </div>
      <div class="contrast">
        <div class="section">
          <div class="section-container">
            <div class="title">Everything is taken care of while you are out, grinding real life.</div>
            <p class="description">RuneDex is currently still in development, but we would love to have you as a Alpha tester! Did we mention its totally free?</p>
            <div class="flex-row">
              <img
                class="img"
                src="@/assets/icons/sword.svg"
              />
              <div class="sub-title">Ready to elevate your osrs experience?</div>
              <img
                class="img flip"
                src="@/assets/icons/sword.svg"
              />
            </div>
            <div @click="logInBottom()">
              <Button class="button" :text="'Open RuneDex'"></Button>
              <div :class="[isBottom ? 'expand-bottom' : '', 'expand-container-bottom']"></div>
            </div>
            <div class="pb" />
          </div>
        </div>
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
import Button from '@/components/buttons/Button'

export default {
  components: { SmallButton, Button },
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
  data() {
    return {
      expand: "",
    }
  },
  computed: {
    ...mapState('app', ['appTitle']),
    isTop() {
      if (this.expand === "top") {
        return true;
      }
      return false;
    },
    isBottom() {
      if (this.expand === "bottom") {
        return true;
      }
      return false;
    },
  }, 
  methods: {
    logInTop() {
      this.logIn("top");
    },
    logInBottom() {
      this.logIn("bottom");
    },
    logIn(arg) {
      this.expand = arg;
      const router = this.$router;
      setTimeout(() => { 
        router.push({ name: 'app'})
      }, 250);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.expand-container {
  position: fixed;
  top: 60px;
  right: 120px;
  background-color: $light;
  width: 0;
  height: 0;
  border-radius: 10000px;
  z-index: 0;
  transition: 400ms ease;
}
.expand {
  z-index: 2;
  width: 200%;
  height: 200%;
  top: -50%;
  right: -50%;
}
.expand-container-bottom {
  position: fixed;
  bottom: 120px;
  left: 120px;
  background-color: $light;
  width: 0;
  height: 0;
  border-radius: 10000px;
  z-index: 0;
  transition: 400ms ease;
}
.expand-bottom {
  z-index: 2;
  width: 200%;
  height: 200%;
  bottom: -50%;
  left: -50%;
}

.page-wrapper {
  margin: auto;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 305px) { // Minimun app width, introduce scrollbar after this.
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
      z-index: 1;
      position: absolute;
      top: 40px;
      right: 80px;
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
      min-height: 600px;
      display: table;
      margin: auto;
      @media only screen and (max-width: 690px) { // Desktop-slim or Tablet
        min-height: 750px;
      }
      .section-container {
        margin: auto;
        display: table-cell;
        vertical-align: middle;
        p {
          max-width: 600px;
          font-size: 24px;
          padding: 0 25px 0 25px;
        }
        .section-title {
          max-width: 600px;
          font-size: 50px;
          padding: 0 25px 10px 25px;
        }
        .right-align {
          text-align: right;
        }

        width: 760px;
        @media only screen and (max-width: 920px) { // Dekstop
          width: 600px;
        }
        @media only screen and (max-width: 690px) { // Desktop-slim or Tablet
          width: 420px;
        }
        @media only screen and (max-width: 420px) { // Mobile
          width: 100%
        }

        .title {
          padding-top: 100px;
          text-align: center;
          // font-family: SeoulNamsan CEB;
          letter-spacing: -0.05em;
          font-size: 50px;
        }
        .description {
          text-align: center;
          font-size: 24px;
          max-width: 1000px;
          padding: 5px 30px 0 30px;
        }
        .sub-title {
          text-align: center;
          font-size: 34px;
          padding: 70px 15px 30px 15px;
        }
        .button {
          width: 200px;
          margin: auto;
        }
        .img {
          padding-top: 70px;
          width: 75px;
          height: 75px;
        }
        @media only screen and (max-width: 690px) { // Desktop-slim or Tablet
          .img {
            display: none;
          }
        }
        .flip {
          transform: scale(-1, 1);
        }
        .pb {
          padding-bottom: 100px;
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

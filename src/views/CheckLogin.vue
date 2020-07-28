<template>
  <div class="outer">
    <div class="inner">
      <div class="loader"/>
      <h2>{{getText}}...</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { isNil } from 'lodash'

export default {
  computed: { 
    ...mapState('authentication', ['user']),
    getText() {
      if (Math.floor(Math.random() * 5000) === 4999) {
        return "Ouch, this could have been a Dragon Warhammer";
      }
      return this.texts[Math.floor(Math.random() * this.texts.length)]
    }
  },
  watch: {
    user: {
      handler(user) {
        if (user === undefined) return

        if (this.$route.query.redirectUrl === this.$route.path) {
          this.$router.push('/')
        }

        const redirectUrl = isNil(user)
          ? `/login?redirectUrl=${this.$route.query.redirectUrl}`
          : this.$route.query.redirectUrl

        this.$router.push(redirectUrl)
      },
      immediate: true
    }
  },
  data() {
    return {
      texts: [
        "Tanning cowhides",
        "Catching lobsters",
        "Smashing sand crabs",
        "Bursting dust devils",
        "Buying gf",
        "Blowing glass",
        "Doubling money",
        "Getting melleed by Jad while protecting range",
        "Getting nerd logged at Olm",
        "Planting snape grass",
        "Losing hardcore status to a tree outside Draynor Manor",
        "Mining blurite ore",
        "Selling a thermonuclear kebab, 5gp",
        "Getting music cape for the 7th time",
        "Shoving dragon claws up Karils arse", // TODO: consider pg13 *insert laughing emoji here*
        "Killing goblins with a meat tenderizer",
        "Killing chickens with an Elder Maul",
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.outer {
  text-align: center;
  display: table;
  height: 60%;
  margin: auto;
}
.inner {
  display: table-cell;
  vertical-align: middle;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: $contrast;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>

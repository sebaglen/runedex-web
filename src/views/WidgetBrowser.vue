<template>
  <div class="widget-browser">
    <div class="header flex-row">
      <div class="flex-row left">
        <div v-on:click="goBack" class="icon-wrapper">
          <img
            class="plus-icon"
            src="@/assets/icons/plus.svg"
          />
        </div>
        <h2>Browse widgets</h2>
      </div>
      <div class="right">
        <input
          placeholder="Search"
          class="search-input"
          type="text"
          :value="searchTerm"
          @input="setSearchTerm($event.target.value)"
          @keypress.enter="search()"
        />
      </div>
    </div>
    <div class="body">
      <widget-browser-item
        v-for="widget in getWidgets"
        :key="widget.type"
        :widget="widget"
      >
      </widget-browser-item>
    </div>
  </div>
</template>

<script>
import WidgetBrowserItem from '@/components/widgets/browser/WidgetBrowserItem'
import {listAllWidgets} from '../components/widgets/widgets/widgetUtils' // eslint-disable-line

export default {
  components: { WidgetBrowserItem },
  data() {
    return {
      searchTerm: "",
    }
  },
  methods: {
    setSearchTerm(term) {
      this.searchTerm = term;
    },
    search() {
      console.log(this.searchTerm);
    },
    goBack() {
      this.$router.push({ name: 'app', params: this.$route.params})
    }
  },
  computed: {
    getWidgets() {
      return listAllWidgets;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget-browser {
  height: 100%;
  width: 100%;
}
.header {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid $grey;
  .left {
    margin: 12px auto 0 10px;
    white-space: nowrap;
    h2 {
      font-size: 18px !important;
    }
    .icon-wrapper {
      padding: 3px 10px 0 0;
      cursor: pointer;
      .plus-icon {
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
      }
    }
  }
  .search-input {
    height: 30px;
    margin: 8px 7px 0 0;
    padding-left: 15px;
    background-color: $light-grey;
    border-radius: 40px;
    outline: none;
    font: inherit;
    font-size: 12px;
    border: 0;
  }
}
</style>

<template>
  <div class="widget-browser-item-container flex-row">
    <div class="left-container">
      <component :is="widget.type" class="widget" />
      <div class="add-button" @click="addWidget">
        <large-button :text="'Add widget'"/>
      </div>
    </div>
    <div class="right-container flex-column">
      <div>
        <h3>{{widget.name}}</h3>
        <div class="break-8"></div>
        <p>{{widget.description}}
        </p>
      </div>
      <p class="permission-text">Requires permissions:</p>
      <div class="flex-row">
        <div class="flex-row" v-for="(permission, index) in widget.permissions" :key="permission">
          <p>{{permission}}</p>
          <p v-if="index < widget.permissions.length -1">,</p>
        </div>
      </div>

      <div @click="addWidget">
        <white-button :text="'Preview full widget'"/>
      </div>
    </div>
  </div>
</template>

<script>
import { miniWidgetComponents } from '../widgets/widgetUtils'
import LargeButton from '@/components/buttons/LargeButton'
import WhiteButton from '@/components/buttons/WhiteButton'

export default {
  components: {
    ...miniWidgetComponents,
    LargeButton,
    WhiteButton
  },
  props: {
    widget: Object,
  },
  methods: {
    addWidget() {
      console.log('Add ' + this.widget.type); //eslint-disable-line
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget-browser-item-container {
  width: 100%;
  max-height: 198px;
  border-bottom: 1px solid $grey;
}
.left-container {
  width: 150px;
}
.right-container {
  margin: 10px 10px 10px 5px;
  .permission-text {
    margin: auto 0 0 0;
  }
}
.widget {
  min-width: 130px;
  min-height: 130px;
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: 10px;
  background-color: $light-grey;
  text-align: center;
  margin: 10px;

}
.add-button {
  margin: 10px 10px 10px 10px;
  font-size: 14px;
}

</style>

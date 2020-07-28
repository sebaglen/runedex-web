<template>
  <div class="widget-browser-item-container flex-row">
    <div class="left-container">
      <component class="widget" :is="type" :unique-id="uniqueId" />
      <div @click="addWidget" class="add-button">
        <large-button :text="'Add widget'"/>
      </div>
    </div>
    <div class="right-container flex-column">
      <div>
        <h3>{{type}}</h3>
        <div class="break-8"></div>
        <p>Monitor progress towards custom account goals. 
          With this widget you can set yourself a goal, and monitor your progression towards that goal. 
          Examples of progression can be quests, items or levels that your account needs before the goal is achieved.
        </p>
      </div>
      <p class="permission-text">Requires permissions: <br/>Bank, Character, Quests</p>
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
    type: String,
    uniqueId: String
  },
  methods: {
    addWidget() {
      console.log('Add ' + this.uniqueId); //eslint-disable-line
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
    margin-top: auto;
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

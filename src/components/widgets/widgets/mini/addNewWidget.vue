<template>
  <div @click="startSelection">
    <h1>+</h1>
    <template v-if="!!selectMode">
      <select v-model="selectedWidget">
        <option v-for="widget in widgets" :key="widget.type">
          {{ widget.name }}
        </option>
      </select>
      <button :disabled="!selectedWidget" @click="addWidget">
        Submit
      </button>
    </template>
  </div>
</template>

<script>
import widgets from '../widgetUtils'

export default {
  data() {
    return {
      selectMode: false,
      selectedWidget: null,
      widgets
    }
  },
  methods: {
    startSelection() {
      this.$data.selectMode = true
    },
    addWidget() {
      console.log(this.$data.selectedWidget)
    }
  }
}
</script>

<style scoped></style>

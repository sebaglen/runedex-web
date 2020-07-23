<template>
  <div @click="startSelection">
    <h1>+</h1>
    <template v-if="!!selectMode">
      <select v-model="selectedWidget">
        <option
          v-for="widget in widgets"
          :key="widget.type"
          :value="widget.type"
        >
          {{ widget.name }}
        </option>
      </select>
      <button
        :disabled="!selectedWidget"
        @click="
          addWidget({
            accountId: $route.params.accountId,
            type: selectedWidget
          })
        "
      >
        Submit
      </button>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions('widgets', ['addWidget'])
  }
}
</script>

<style scoped></style>

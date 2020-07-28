<template>
  <div class="button outer" @click="$emit('clicked')">
    <div class="inner">
      <div class="margin"><h3>{{text}}</h3></div>
    </div> 
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.button {
  cursor: pointer;
  color: $black;
  background-color: $white;
  border: 1px solid $grey;
  border-radius: 10px;
  min-height: 36px;
  padding: 0 15px 0 15px;
  white-space: nowrap;
}
.outer {
  display: table;
  height: 100%;
  margin: auto auto auto 0;
}
.inner {
  display: table-cell;
  vertical-align: middle;
}
</style>

<template>
    <div class="widget">
      {{type}}
    </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.widget {
  min-width: 140px;
  min-height: 140px;
  border-radius: 10px;
  background-color: $light;
  text-align: center;
  font-size: 0.8em;
  margin: 13px 0 0 13px;
  cursor: pointer;
}
</style>

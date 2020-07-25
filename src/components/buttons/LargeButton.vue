<template>
  <div class="button" @click="$emit('clicked')">
    <div class="flex-row">
      <img
        class="img"
        src="@/assets/icons/plus.svg"
      />
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
  background-color: $light-grey;
  border-radius: 10px;
  min-height: 38px;
  text-align: center;
  .img {
    width: 12px;
    height: 12px;
    padding: 13px
  }
  .margin {
    margin: auto auto auto 0;
    h3 {
      margin-top: -2px;
    }
  }
}
</style>

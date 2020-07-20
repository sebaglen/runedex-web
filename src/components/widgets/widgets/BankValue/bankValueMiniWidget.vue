<template>
  <div>
    <h1>Bank Value</h1>
    <p>{{ uniqueId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    uniqueId: String
  }
}
</script>

<style scoped></style>

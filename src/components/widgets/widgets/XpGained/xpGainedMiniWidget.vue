<template>
  <div>
    <h1>XP Gained</h1>
    <p>{{ uniqueId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // use this to fetch proper config and data
    uniqueId: String
  }
}
</script>

<style scoped></style>

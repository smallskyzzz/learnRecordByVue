<template>
  <div>this is c  aText: {{ aText }}</div>
</template>

<script>
export default {
  name: "c",
  props: {
    aText: {
      type: String,
      default: ''
    }
  },
  created () {
    this.$listeners.isClick()
  }
}
</script>

<style scoped>

</style>

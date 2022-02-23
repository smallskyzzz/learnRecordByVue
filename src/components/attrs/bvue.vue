<template>
  <div>
    this is b
    <cvue v-bind="$attrs" v-on="$listeners"></cvue>
  </div>
</template>

<script>
import cvue from "./cvue";

export default {
  name: "bvue",
  components: {
    cvue
  }
}
</script>

<style scoped>

</style>

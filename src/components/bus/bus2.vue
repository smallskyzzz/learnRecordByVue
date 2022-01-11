<template>
  <div>bus2:{{ msg }}</div>
</template>

<script>
import { EventBus } from "../../bus/bus";

export default {
  name: "bus2",
  data () {
    return {
      msg: 0
    }
  },
  mounted() {
    EventBus.$on('bus1SendMsg', (msg) => {
      this.msg = msg
    })
  }
}
</script>

<style scoped>

</style>

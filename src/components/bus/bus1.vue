<template>
  <div>
    bus1:<button @click="sendMsg">add</button>
  </div>
</template>

<script>
import { EventBus } from "../../bus/bus";

export default {
  name: "bus1",
  data () {
    return {
      num: 1
    }
  },
  methods: {
    sendMsg () {
      EventBus.$emit('bus1SendMsg', this.num ++)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    this is a
    <bvue :aText="aText" @isClick="isClick"></bvue>
  </div>
</template>

<script>
import bvue from './bvue'

export default {
  name: "avue",
  data () {
    return {
      aText: 'l am a'
    }
  },
  components: {
    bvue
  },
  methods: {
    isClick () {
      alert('from c!')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <Checkbox v-if="!data.radio" v-model="data.checkBox" @on-change="handleCheckBox" />
    <Button v-if="data.radio" style="position: absolute;opacity: 0;z-index: 10;width: 20px;height: 20px;padding: 0" @click="handleRadio"></Button>
    <Radio v-if="data.radio" v-model="data.radio" />
    {{ data.title }}
  </div>
</template>

<script>
  export default {
    name: "tree-item",
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    // watch: {
    //   'data.checkBox': {
    //     handler (newVal, oldVal) {
    //       if (!oldVal) {
    //         this.data.radio = true
    //       } else {
    //         this.data.radio = false
    //       }
    //     }
    //   }
    // },
    methods: {
      handleCheckBox (e) {
        if (e) {
          this.data.radio = true
        } else {
          this.data.radio = false
          this.$emit('changeStatus', this.data)
        }
      },
      handleRadio () {
        this.data.checkBox = true
        this.data.radio = false
        this.$emit('changeStatus', this.data)
      }
    }
  }
</script>

<style scoped>

</style>

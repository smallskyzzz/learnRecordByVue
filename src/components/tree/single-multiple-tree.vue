<template>
  <div>
    <Tree :data="data" :render="renderTree"></Tree>
    <pre>{{ data }}</pre>
  </div>
</template>

<script type="text/jsx">
import TreeItem from './item/tree-item'

export default {
  name: "single-multiple-tree",
  data () {
    return {
      data: [{
        expand: true,
        title: '一级 1',
        checkBox: false,
        radio: false,
        children: [{
          expand: true,
          title: '二级 1-1',
          checkBox: false,
          radio: false,
          children: [
            {
              expand: true,
              title: '三级 1-1-2',
              checkBox: false,
              radio: false,
            }
          ]
        }]
      }],
      checkStrictly: true
    }
  },
  component: {
    TreeItem
  },
  methods: {
    renderTree (h, { root, node, data }) {
      return (
        <TreeItem data={data} on-changeStatus={this.changeStatus} />
      )
    },
    changeStatus (data) {
      this.data = this.changeTreeData(this.data, data)
    },
    changeTreeData (data, d) {
      let flag = false
      data.forEach((r) => {
        if (r.title === d.title) {
          console.log(data)
          flag = d.checkBox
          if (r.children) {
            data.children = this.changeTreeStatus(r.children, flag)
          }
          return data
        }
        if (r.children && r.children.length && r.children !== 'null') {
          this.changeTreeData(r.children, d)
        }
      })
      return data
    },
    changeTreeStatus (data, flag) {
      console.log(data)
      data.forEach((r, i) => {
        r.checkBox = flag
        if (r.children && r.children.length && r.children !== 'null') {
          this.changeTreeStatus(r.children, flag)
        }
      })
      return data
    }
  }
}
</script>

<style scoped>

</style>

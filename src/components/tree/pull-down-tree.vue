<template>
  <div>
    <Select v-model="selectedData" multiple @on-open-change="selectOpenChange" transfer transfer-class-name="dsadsadsa">
      <Option v-for="(s, i) in arrayData" :key="i" :value="s.title" v-show="false">
        {{ s.title }}
      </Option>
      <Tree :data="data" show-checkbox @on-check-change="checkChange"></Tree>
    </Select>
  </div>
</template>

<script>
  export default {
    name: "pull-down-tree",
    watch: {
      selectedData: {
        handler (val) {
          this.data = this.ifHasPowerCodeTreeData(this.data, val)
        },
        immediate: true
      }
    },
    data () {
      return {
        selectedData: [],
        arrayData: [],
        data: [{
          expand: true,
          title: '一级 1',
          children: [{
            expand: true,
            title: '二级 1-1',
            children: [
              {
                expand: true,
                title: '三级 1-1-2',
                children: [
                  {
                    expand: true,
                    title: '四级 1-1-3-4'
                  }]
              },
              {
                expand: true,
                title: '三级 1-1-2'
              }
            ]
          }]
        }, {
          expand: true,
          title: '一级 2',
          children: [{
            expand: true,
            title: '二级 2-1'
          }, {
            expand: true,
            title: '二级 2-2'
          }]
        }, {
          expand: true,
          title: '一级 3',
          children: [{
            expand: true,
            title: '二级 3-1'
          }, {
            expand: true,
            title: '二级 3-2'
          }]
        }]
      }
    },
    mounted () {
      this.formatTreeDataToArray(this.data)
      console.log(this.arrayData)
      this.selectedData = ['二级 3-2']
    },
    methods: {
      checkChange (arr, node) {
        this.selectedData = []
        arr.forEach(a => {
          this.selectedData.push(a.title)
        })
      },
      formatTreeDataToArray (data) {
        data.forEach(d => {
          this.arrayData.push(d)
          if (d.children && d.children.length && d.children !== 'null') {
            this.formatTreeDataToArray(d.children)
          }
        })
      },
      // 下拉框展开时需要判断tree的选中数据
      selectOpenChange (e) {
        this.data = this.ifHasPowerCodeTreeData(this.data, this.selectedData)
      },
      // 通过codes数组判断树是否勾选
      ifHasPowerCodeTreeData (data, codes) {
        data.forEach(d => {
          // 直接赋值会导致不能响应式
          this.$set(d, 'checked', (codes.includes(d.title)) && !d.children)
          if (d.children && d.children.length) {
            this.ifHasPowerCodeTreeData(d.children, codes)
          }
        })
        return data
      }
    }
  }
</script>

<style scoped>

</style>

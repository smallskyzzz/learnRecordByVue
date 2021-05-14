<template>
  <div>
    <Input placeholder="输入关键字进行过滤" v-model="filterText"/>
    <Tree :data="data" show-checkbox></Tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      filterText:null,
      flag:0,
      data:[],
      data2:  [{
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
      }],
    }
  },
  methods: {
    //过滤树节点
    filterNode(val,List){
      //过滤出满足条件的数组
      let List1=List.filter(item=>{
        //如果该元素有children，则优先处理children的
        if(item.children){
          //过滤children里面满足条件的
          item.children=this.filterNode(val,item.children)
          //如果children里面没有满足条件的，则进入，否则返回true
          if(!item.children.some(item1=>item1.title.indexOf(val) !== -1)){
            //判断children里面是否还有一层children,如果有则对内层children继续调用函数判断，否则返回title中含有关键字的元素
            if(item.children.some(item1=>item1.children)){
              item.children.forEach(item2 => {
                item2.children&&this.filterNode(val,item2.children)
              });
            }else{
              return item.title.indexOf(val) > -1
            }
          }
          return true
        }
        //返回title中含有关键字的元素
        return item.title.indexOf(val) > -1
      })
      return List1
    }
  },
  mounted(){
    this.data=this.data2
  },
  watch: {
    filterText(val) {
      let arr=JSON.parse(JSON.stringify(this.data2))
      this.data=this.filterNode(val,arr)
    }
  },
}
</script>

<style lang="stylus">

</style>

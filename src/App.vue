<template>
  <div style="padding: 10px">
    <div class="link-wrapper">
      <router-link to="/filter-tree">过滤tree</router-link>
      <router-link to="/single-multiple-tree">单选多选tree</router-link>
      <router-link to="/pull-down-tree">下拉tree</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="stylus">
.link-wrapper
  display flex
  padding 10px 0
  a
    flex 1
    text-align center
  a.router-link-active
    color chartreuse
</style>

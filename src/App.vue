<template>
  <div style="padding: 10px">
    <div class="link-wrapper">
      <router-link to="/filter-tree">过滤tree</router-link>
      <router-link to="/single-multiple-tree">单选多选tree</router-link>
      <router-link to="/pull-down-tree">下拉tree</router-link>
      <router-link to="/menu">Menu</router-link>
    </div>
    <router-view></router-view>
    <bus1></bus1>
    <bus2></bus2>
  </div>
</template>

<script>
import bus1 from "./components/bus/bus1";
import bus2 from "./components/bus/bus2";

export default {
  components: {
    bus1,
    bus2
  }
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

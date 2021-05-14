import Vue from 'vue'
import Router from 'vue-router'
import FilterTree from '@/components/tree/filter-tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/filter-tree',
      name: 'FilterTree',
      component: FilterTree
    }
  ]
})

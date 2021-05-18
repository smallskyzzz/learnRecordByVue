import Vue from 'vue'
import Router from 'vue-router'
import FilterTree from '@/components/tree/filter-tree'
import singleMultipleTree from '@/components/tree/single-multiple-tree'
import pullDownTree from '@/components/tree/pull-down-tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/filter-tree',
      name: 'FilterTree',
      component: FilterTree
    },
    {
      path: '/single-multiple-tree',
      name: 'singleMultipleTree',
      component: singleMultipleTree
    },
    {
      path: '/pull-down-tree',
      name: 'pullDownTree',
      component: pullDownTree
    }
  ]
})

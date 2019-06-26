import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import table from './views/table.vue'
import vmodel from './views/vmodel.vue'
import tableSimple from './views/tableSimple.vue'
import List from './views/List.vue'
import CreateAritcle from './views/CreateAritcle.vue'
import ListArticle from './views/ListArticle.vue'
import EditeArticle from './views/EditeArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/table',
      name: 'tableData',
      component: table
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: vmodel
    },
    {
      path: '/tableSimple',
      name: 'tableSimple',
      component: tableSimple
    },
   {
     path: '/List',
     name: 'List',
     component: List
   },
   {
     path: '/article/create',
     name: 'CreateAritcle',
     component: CreateAritcle
   },
   {
     path: '/article/list',
     name: 'ListArticle',
     component: ListArticle
   },
   {
     path: '/article/:id/edit',
     name: 'EditeArticle',
     component: EditeArticle
   },
  ],
   linkActiveClass: 'active' //覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

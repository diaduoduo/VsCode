//入口文件
import Vue from 'vue'
//导入路由的包
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vueadmin from './views/vueadmin.vue'
import HomeContaniner from './views/tabbar/HomeContaniner.vue'
import MemberContainer from './views/tabbar/MemberContainer.vue'
import SearchContainer from './views/tabbar/SearchContainer.vue'
import ShopcarContainer from './views/tabbar/ShopcarContainer.vue'
//安装路由
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeContaniner
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
      path: '/vueadmin',
      name: 'vueadmin',
      component: Vueadmin
    },
    {
      path: '/homei',
      component: HomeContaniner
    }, {
      path: '/member',
      component: MemberContainer
    },{
      path: '/shopcar',
      component: ShopcarContainer,
    },{
      path: '/set',
      component: SearchContainer,
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hi11 from '@/components/Hi11'
import Hi22 from '@/components/Hi22'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:"/params/:newsId(\\d+)/:newsTitle",
      component: Params,
      beforeEnter: (to, from, next)=>{
        console.log(to);
        console.log(from);
        next();
        /* 
        next(false);
        next(true);
        next({path:'/'})
        */
      }
    },{
      path:"/gotohome",
      redirect:'/'
    },{
      path:'/Hi11',
      component: Hi11,
      alias:"/jspang"
    },
    {
      path: '/',
      name: 'HelloWorld',
      components: {//多个参数 要加 components 要加s
        default: HelloWorld,
        left:Hi11,
        right:Hi22
      }
    }, {
      path: '/jspang',
      name: 'HelloWorld',
      components: {//多个参数 要加 components 要加s
        default: HelloWorld,
        left: Hi22,
        right: Hi11
      }
    },{
      path:'/Hi',
      name:"Hi",
      component:Hi,
      children:[
        {path:'/',name:"Hello/Hi",component:Hi},
        { path: 'hi1', name: "Hi1", component: Hi1},
        { path: 'hi2', name: "Hi2", component: Hi2},
      ]
    },{
      path:'*',
      component:Error
    }
    
  ]
})

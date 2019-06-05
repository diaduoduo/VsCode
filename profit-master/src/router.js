import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profit',
      component: ()=>import('./views/profit.vue')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import( './views/friends.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import( './views/card.vue')
    },
    {
      path: '/addCard',
      name: 'addCard',
      component: () => import( './views/addCard.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import( './views/withdraw.vue')
    },
    {
      path: '/profitExplain',
      name: 'profitExplain',
      component: () => import( './views/profitExplain.vue')
    },
    {
      path: '/ruleExplain',
      name: 'ruleExplain',
      component: () => import( './views/ruleExplain.vue')
    },
      {
          path: '/invite',
          name: 'invite',
          component: () => import( './views/invite.vue')
      },
    {
      path: '*',
      redirect:"/"
    },
  ]
})

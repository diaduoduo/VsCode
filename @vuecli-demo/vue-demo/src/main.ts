import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
Vue.config.productionTip = false;
// 实例化　VueRouter
const router = new VueRouter({
  mode: 'history',
  routes: routes,
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

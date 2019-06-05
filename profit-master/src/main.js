import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import './registerServiceWorker'
import platform from './utils/platform'
import { Indicator ,Toast,TabContainer, TabContainerItem} from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/css/common.css'

fastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.prototype.platform=platform;
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.prototype.$toast=Toast;
Vue.prototype.$Indicator=Indicator;


import axios from './utils/axios'


import topTab from "./components/topTab"
Vue.component("top-tab",topTab);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

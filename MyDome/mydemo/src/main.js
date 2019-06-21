import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/css/base.css'
/* +++++ Element UI 组件的引用 S+++++ */
import ElementUI from 'element-ui'
Vue.use(ElementUI)
 // 引入组件
import {Button,Select} from 'element-ui';
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Row)
 Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
 // 引入组件
import 'element-ui/lib/theme-chalk/index.css'

/* +++++ Element UI 组件的引用 E+++++ */

/* +++++ Axios 组件的引用 S+++++ */
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
/* +++++ Axios 组件的引用 E+++++ */


//导入格式化时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

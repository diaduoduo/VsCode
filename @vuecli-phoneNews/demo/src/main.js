//入口文件
import Vue from 'vue'
// 导入app 根组件
import App from './App.vue'

//导入路由的包
import router from './router'
import store from './store'
import './registerServiceWorker'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios) //注册组件

//ui样式
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

// 全局将axios改写成Vue的原型属性
//Vue.prototype.$http = axios
// 引入全部组件

/* import Mint from 'mint-ui'

    Vue.use(Mint);
*/

// 按需引入部分组件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);




import commentBtn from "./components/subcomponents/commentBtn";
Vue.component("commentBtn", commentBtn);



Vue.config.productionTip = false
//导入格式化时间插件  npm i moment -S
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

//实例化
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

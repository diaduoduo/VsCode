//入口文件
import Vue from 'vue'
// 导入app 根组件
import App from './App.vue'


import router from './router'
import store from './store'
import './registerServiceWorker'

//ui样式
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.css'


// 引入全部组件

/* import Mint from 'mint-ui'

    Vue.use(Mint);
*/

// 按需引入部分组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)




Vue.config.productionTip = false


//实例化
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

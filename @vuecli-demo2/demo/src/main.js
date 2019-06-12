import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'mint-ui/lib/style.css'

// 引入全部组件

/* import Mint from 'mint-ui'

    Vue.use(Mint);
*/

//引入部分组件
import { Cell,Checklist ,Button} from 'mint-ui'
Vue.component(Cell.name,Cell)
Vue.component(Button.name, Button)
Vue.component(Checklist.name,Checklist)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import axios from "axios"
import Vue from "vue"

import { Indicator ,Toast} from 'mint-ui';

let apiHost=process.env.VUE_APP_APIHOST;

axios.defaults.baseURL = apiHost;
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    config.headers.Authorization=window.sessionStorage.getItem("token");
    Indicator.open();
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    Indicator.close();
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    Indicator.close();
    Toast("请求失败，请稍后重试");
    return Promise.reject(error);
});


Vue.prototype.$axios=axios;
Vue.prototype.$get=axios.get;
Vue.prototype.$post=axios.post;


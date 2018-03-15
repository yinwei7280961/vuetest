// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store.js' 
import '../static/css/reset.css' 
Vue.config.productionTip = false

/* eslint-disable no-new */
//new Vue({
//el: '#app',
//router,
//components: { App },
//template: '<App/>'
//})
//引入store.js文件

new Vue({
    el: '#app',
    router,
    store:store, //将store暴露出来，也就是把store对象挂载到整个应用中
    template: '<App></App>',
    components: { App }
});
//
//作者：newArray
//链接：https://www.jianshu.com/p/c36792b38510
//來源：简书
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
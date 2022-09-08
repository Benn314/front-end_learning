// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 这里后缀都是没写的 先找App.vue
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // main.js上的挂载点app指的就是index.html中的app
  router,
  components: { App }, // ES6的写法 {App : App}
  template: '<App/>'
})

// 路由就是根据网址的不同 返回不同的内容给用户

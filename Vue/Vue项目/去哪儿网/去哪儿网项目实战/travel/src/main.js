// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 这里后缀都是没写的 先找App.vue
import router from './router'
// eslint-disable-next-line
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 这样 fastClick就设置完成咯 移动端点击的300ms问题就被解决了

/* eslint-disable no-new */
new Vue({
  el: '#app', // main.js上的挂载点app指的就是index.html中的app
  router,
  components: { App }, // ES6的写法 {App : App}
  template: '<App/>'
})

// 路由就是根据网址的不同 返回不同的内容给用户

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 这里后缀都是没写的 先找App.vue 这里面有Vue_logo.png显示在根路径
import router from './router' // router的index.js里导入了Home.vue 所以Vue_logo.png和Home.vue的信息会一起显示在根路径中
import fastClick from 'fastclick'
// 不知道为什么style里的这三个css文件运行会报错 找不到dependency依赖
// 原因 视频源码的css文件的存放路径跟你不同 所谓的dependency依赖 就是没找到这个文件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css' // 适配移动端不同机型 正常显示1倍屏的数据在不同倍屏的情况下
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
// import 'swiper/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 这样 fastClick就设置完成咯 移动端点击的300ms问题就被解决了
Vue.use(VueAwesomeSwiper /* { deault gloabal options} */) // VueAwesomeSwiper后面还可以跟一些参数 有需要再来填写

/* eslint-disable no-new */
new Vue({
  el: '#app', // main.js上的挂载点app指的就是index.html中的app
  router,
  store,
  components: {
    App
  }, // ES6的写法 {App : App}
  template: '<App/>'
})

// 路由就是根据网址的不同 返回不同的内容给用户

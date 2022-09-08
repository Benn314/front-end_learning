import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @指src下的目录
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 根路径
      // name: "HelloWorld",
      name: 'Home',
      component: Home
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @指src下的目录
import Home from '@/pages/home/Home'
// eslint-disable-next-line no-unused-vars
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 根路径
      // name: "HelloWorld",
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})

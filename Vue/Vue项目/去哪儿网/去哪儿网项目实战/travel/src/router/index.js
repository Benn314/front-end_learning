import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @指src下的目录
import Home from '@/pages/home/Home'
// eslint-disable-next-line no-unused-vars
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

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
    }, {
      path: '/detail/:id', // 这便是动态路由前面的路径必须是反斜杠/ 后面可以带一个参数 参数可以放到id参数里面
      name: 'Detail',
      component: Detail
    }],
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return { x: 0, y: 0 }
  }

})

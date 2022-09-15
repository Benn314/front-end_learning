<template>
  <div>
    <div>
      <!-- hello world -->
      <!-- <home-header :city="city"></home-header> -->
      <!-- 以前首页的头部属性city是从外部传递进去的 现在不需要外部传递进去了 -->
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
    <!-- <router-link to="/list" class="home">列表页</router-link> -->
    <!--
      在vue中一般用router-link进行超链接跳转 不用 a标签
      template只能包裹一个标签（标签里可嵌套） 不能有多个并行标签
      所以再用一个div包裹并行的div标签和router-link标签
      -->
   </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// 所有组件都在Home里 所以把axios写在这里最合适
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader, // ES6的写法
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      // city: '', // 以前是Ajax传过来的数据 现在改为由前端传递数据给我们
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // console.log(res)
    }
  },
  mounted () {
    // lastCity在这里是临时缓冲变量
    this.lastCity = this.city
    // 页面被第一次加载的时候 mounted一定会被执行
    // console.log('mounted')
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    // activated是页面被(重新)显示的时候 会被执行
    // console.log('activated')
  }
}
</script>

<style>

</style>

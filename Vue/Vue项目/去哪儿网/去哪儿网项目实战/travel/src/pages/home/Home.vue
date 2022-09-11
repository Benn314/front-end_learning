<template>
  <div>
    <div>
      <!-- hello world -->
      <home-header :city="city"></home-header>
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
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
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
    this.getHomeInfo()
  }
}
</script>

<style>

</style>

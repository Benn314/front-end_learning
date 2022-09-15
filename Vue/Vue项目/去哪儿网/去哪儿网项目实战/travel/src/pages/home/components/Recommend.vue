<template>
  <div class="wrapper">
    <div class="title">热销推荐</div>
      <ul>
          <!-- 多出一像素边框 写一个border-bottom的类就好了 -->
          <router-link
            tag="li"
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
            :to="'/detail/' + item.id"
          >
            <!-- <div class="item-img-wrapper"></div> img-wrapper 图片外层包裹 用来撑开我们的图片 防止页面抖动 -->
              <img class="item-img" :src="item.imgUrl" />
              <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'https://s2.loli.net/2022/09/11/jQwfHdSNi84oVr7.png',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'https://s2.loli.net/2022/09/11/jQwfHdSNi84oVr7.png',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'https://s2.loli.net/2022/09/11/jQwfHdSNi84oVr7.png',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首战，浪漫的海洋主题乐园'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl' // 文字太多会溢出？用上节课学习的内容 引入这个文件
  .wrapper
    text-align: left
    .title
      margin-top: .2rem
      line-height: .8rem
      background: #eee
      text-indent: .2rem
    .item
      overflow: hidden
      display: flex
      height: 1.9rem
      // background: red
      .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
      .item-info
        flex: 1
        padding: .1rem
        min-width: 0 // 作用是让单行溢出部分用省略号展示
        .item-title
          line-height: .54rem
          font-size: .32rem
          ellipsis()
        .item-desc
          line-height: .4rem
          color: #ccc
          ellipsis()
        .item-button
          line-height: .44rem
          margin-top: .16rem
          background: #ff9300
          padding: 0 .2rem
          border-radius: .06rem
          color: #fff
</style>

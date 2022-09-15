<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
        </div>
        <router-link to='city'>
          <div class="header-right">
            <!-- {{this.city}} -->
            <!-- {{this.$store.state.city}} -->
            {{this.city}}
            <!-- {{this.doubleCity}} -->
            <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
// import {mapState, mapGetters} from 'vuex'
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  // 以前city是外部Ajax传递过来的 现在改为由前端发给我们
  // props: {
  //   city: String
  // }
  computed: {
    // ... 是展开运算符
    ...mapState(['city']) // 这样子调用city这个公共数据就可以直接缩写不用写全名啦~ 省略.$store.state
    // 将city映射到mapState 上面便可简写
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  /* @import '../../../assets/styles/varibles.styl' */
  /* @import '~@/assets/styles/varibles.styl' */
  @import '~styles/varibles.styl'
  // .header
  //   display:flex
  //   line-height: $headerHeight
  //   background: $bgColor
  //   color: #fff
  //   // width: 400px
  //   border-radius: .1rem
  //   margin:auto
  //   .header-left
  //     width: .64rem
  //     float: left
  //     width 1.24rem
  //   .header-input
  //     flex:1
  //     line-height: .64rem
  //     height: .64rem
  //     margin-top: .12rem
  //     background: #fff
  //     border-radius: .1rem
  //     color: #ccc
  //     text-align: left
  //     padding-left: .2rem
  //   .header-right
  //     width 1.24rem
  //     float:right
  //     text-align: center
  //     color: #fff
  //     .arrow-icon
  //       margin-left: -.02rem
  //       font-size: .24rem

// 视频源码
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem // 把width改成min-width 适配 不让城市名太长的显示奇怪 不在同一行
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>

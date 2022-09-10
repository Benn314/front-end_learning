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
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  /* @import '../../../assets/styles/varibles.styl' */
  /* @import '~@/assets/styles/varibles.styl' */
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    // width: 400px
    border-radius: .1rem
    margin:auto
    .header-left
      width: .64rem
      float: left
      width 1.24rem
    .header-input
      flex:1
      line-height: .64rem
      height: .64rem
      margin-top: .12rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      text-align: left
      padding-left: .2rem
    .header-right
      width 1.24rem
      float:right
      text-align: center
      .arrow-icon
        margin-left: -.02rem
        font-size: .24rem
</style>

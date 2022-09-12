<template>
    <div class="list" ref="warpper">
        <div>
            <div class="area">
                <div class="title border-topbottom" >当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 对象也可以被循环 第二项不像数组是index了 而是key -->
            <!-- 这里父级的key值让他等于key就好了 因为abcd是不会重名的
                只要单层层级不重复就好了 和下一层或上一层重复是没关系的
             -->
            <div class="area" v-for="(item, key) of cities" :key="key">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.warpper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom // 加下边线
    &:before
      border-color: #ccc
  .list
    overflow: hidden // 加了hidden 滚轮效果会消失
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

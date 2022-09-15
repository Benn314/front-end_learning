<template>
    <div class="list" ref="warpper">
        <div>
            <div class="area">
                <div class="title border-topbottom" >当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                          <!-- {{this.$store.state.city}} -->
                          {{this.currentCity}}
                          </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 对象也可以被循环 第二项不像数组是index了 而是key -->
            <!-- 这里父级的key值让他等于key就好了 因为abcd是不会重名的
                只要单层层级不重复就好了 和下一层或上一层重复是没关系的
             -->
            <div
                class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
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
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      // 传递给mapState可以是一个数组也可以是一个对象
      currentCity: 'city'
      /*
        翻译一下这句话的意思:
        我想把vuex中city的这个数据映射到我这个组件的计算属性里,映射过来的名字叫做currentCity
      */
    })
  },
  methods: {
    handleCityClick (city) {
      // alert(city)
      // this.$store.dispatch('changeCity', city) // 因为只是修改一个state值 没有异步操作和批量操作 没必要转发dispatch调用actions，直接用mutations调用commits就行了
      // this.$store.commit('changeCity', city) // 77行的代码等同于81+78行的代码
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
    //   console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element) // element 是一个数组 我们需要的是一个dom元素/dom选择器
        // 在this.letter后面加一个[0]就是获取数组第一位 也就变成dom元素了
        this.scroll.scrollToElement(element)
      }
    }
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

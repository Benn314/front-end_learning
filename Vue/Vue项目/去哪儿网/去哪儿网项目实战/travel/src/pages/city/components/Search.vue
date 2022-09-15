<template>
    <div>
        <div class="search">
            <!-- placeholder 占位符 -->
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div
          class="search-content"
          ref="search"
          v-show="keyword">
            <ul>
                <li
                  class="search-item border-bottom"
                  v-for="item of list"
                  :key="item.id"
                  @click="handleCityClick(item.name)"
                  >{{item.name}}</li>
                <li
                 class="search-item border-bottom"
                 v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length // length==0
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    // 原来的写法
    // handleCityClick (city) {
    //   this.$store.commit('changeCity', city)
    //   this.$router.push('/')
    // }

    // 优化上面代码 使用vuex的mapMutations
    handleCityClick (city) {
      // alert(city)
      // this.$store.dispatch('changeCity', city) // 因为只是修改一个state值 没有异步操作和批量操作 没必要转发dispatch调用actions，直接用mutations调用commits就行了
      // this.$store.commit('changeCity', city) // 77行的代码等同于81+78行的代码
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])

  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem // 左右两边留点空隙 美化一点
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>

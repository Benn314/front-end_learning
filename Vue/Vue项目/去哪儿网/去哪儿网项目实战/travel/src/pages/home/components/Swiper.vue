<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="wrapper">
    <!--
      因为 swiperList: [] 最开始创建的是空数组 页面无法获取索引显示的是最后一张
      那么如何解决这一问题呢 我们只要在 swiper组件中添加v-if 如果swiper一开始未被真正创建
      那么就不显示 直到swiperList传递了数据被真正渲染 才显示 这时显示的就会是第一张图片
      -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- button-prev和button-next是代表左右箭头 -->
      <!-- <div class="swiper-button-prev"  slot="button-prev"></div>
      <div class="swiper-button-next"  slot="button-next"></div> -->
      <!-- scrollbar是代表滚动条 -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_250x250_e1b08a5e.jpg'
      // }, {
      //   id: '0002',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_250x250_48713510.jpg'
      // }]
    }
  },
  computed: {
    showSwiper () {
      // 显示showSwiper 根据list的长度length
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>  /**指定样式语法 然后他是一个限制范围的样式*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    /**.swiper-pagination-bullet-active不起作用 它虽然在swiper-pagination中
        但这个组件最终传递的参数是作用在swiper组件中的 再又swiper决定显示什么内容
        且.swiper-pagination-bullet-active不再swiper里
        有了scoped的限制范围 我们可以用 >>>进行穿透处理
        只要在wrapper下的.swiper-pagination-bullet-active 我们就对其发生规定样式的改变
    */
  .wrapper
    overflow: hidden
    width: 100%
    height: 0 /**这里不能直接在height定义 不然定义的是父级div的宽高比 而不是图片img的宽高比*/
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>

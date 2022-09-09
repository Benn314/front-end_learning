<template>
  <div>
    <div>
      <!-- hello world -->
      <home-header></home-header>
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
export default {
  name: 'Home',
  components: {
    HomeHeader // ES6的写法
  }
}
</script>

<style>

</style>

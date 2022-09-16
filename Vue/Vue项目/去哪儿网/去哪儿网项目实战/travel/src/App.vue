<template>
  <div id="app">
    <!-- <center> -->
      <!-- <img src="./assets/logo.png"> -->
      <!--
        这里keepAlive的意思是 我的路由加载了一次之后
        我就把我的路由加载到内存之中 下一次再调用这个路由的时候
        不需要你去重新渲染这个组件 去重新执行mounted钩子函数
        从内存里把以前的东西拿出来显示就可以 就不会再去调用Ajax请求了
       -->
      <keep-alive exclude="Detail">
        <router-view/>
      </keep-alive>

    <!-- </center> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px;  */
}
</style>

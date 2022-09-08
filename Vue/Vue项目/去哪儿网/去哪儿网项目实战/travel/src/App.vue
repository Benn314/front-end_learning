<script>
/*
写点注释：

以vue为后缀的组件我们成为单文件组件
这里面放vue的组件

template 组件的定义现在放在这
script 组件的逻辑
style 组件的css样式
*/
</script>

<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- 显示的是当前路由地址所对应的内容 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

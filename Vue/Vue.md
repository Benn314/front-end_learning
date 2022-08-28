# 01 课程介绍

![image-20220818214458913](Vue.assets/image-20220818214458913.png)

​	

​	

# 02 Vue基础-简介

![image-20220818214703633](Vue.assets/image-20220818214703633.png)

![image-20220818214719510](Vue.assets/image-20220818214719510.png)

​	

​	

# 03 Vue基础-第一个Vue程序

![image-20220818214755412](Vue.assets/image-20220818214755412.png)

![image-20220818214826440](Vue.assets/image-20220818214826440.png)

![image-20220818215322198](Vue.assets/image-20220818215322198.png)

![image-20220818220738098](Vue.assets/image-20220818220738098.png)

​	

**01_vue基础.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">{{message}}</div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: " Hello Vue! ",
        },
      });
    </script>
  </body>
</html>

```

​	

​	

# 04 Vue基础-el挂载点

![image-20220818220917429](Vue.assets/image-20220818220917429.png)

![image-20220818220950671](Vue.assets/image-20220818220950671.png)

实际开发中一般用id选择器 因为约定 id选择器是唯一的，而class类选择器和标签选择器则不是唯一的

![image-20220818221540870](Vue.assets/image-20220818221540870.png)

不能把el挂到body标签和html标签上

![image-20220818221958326](Vue.assets/image-20220818221958326.png)

![image-20220818222002872](Vue.assets/image-20220818222002872.png)

​	

​	

# 05 Vue基础 data数据对象

![image-20220818222052670](Vue.assets/image-20220818222052670.png)

​	

要添加这样的复杂类型 如何使用呢？

![image-20220818222339507](Vue.assets/image-20220818222339507.png)

![image-20220818223344437](Vue.assets/image-20220818223344437.png)

​	

**03_data数据对象.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      {{message}}
      <h2>{{school.name }} {{school.mobile}}</h2>
      <ul>
        <li>{{campus[0]}}</li>
        <li>{{campus[3]}}</li>
      </ul>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: " Hello Vue! ",
          school: {
            name: "小黑",
            mobile: "123456",
          },
          campus: ["北京校区", "上海校区", "广州校区", "深圳校区"],
        },
      });
    </script>
  </body>
</html>

```

​	

​	

# 06 本地应用-介绍

![image-20220818233237305](Vue.assets/image-20220818233237305.png)

通过

![image-20220818233245012](Vue.assets/image-20220818233245012.png)

来实现

vue指令有下面这些

![image-20220818233304502](Vue.assets/image-20220818233304502.png)

![image-20220818233308688](Vue.assets/image-20220818233308688.png)

​	

​	

# 07 本地应用 v-text指令

![image-20220818233443732](Vue.assets/image-20220818233443732.png)

![image-20220818235102279](Vue.assets/image-20220818235102279.png)

![image-20220818235120325](Vue.assets/image-20220818235120325.png)

![image-20220818235136602](Vue.assets/image-20220818235136602.png)

（v-text属性）内部用 +连接符表达式 连接的内容不会被覆盖  前后标签的内容则会被替换

​	

**04_v-text指令.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h2 v-text="message+'!'">深圳</h2>
      <h2 v-text="info+'!'">深圳</h2>
      <h2>{{message+'!'}} 深圳</h2>
      <h2 v-text="message+'0'">{{message+'1'}} 深圳</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "小黑马",
          info: "前端30k",
        },
      });
    </script>
  </body>
</html>

```

> 运行结果

![image-20220818235617273](Vue.assets/image-20220818235617273.png)

> v-text属性优先级比 {{ }} 大  有了v-text  {{ }}也会被全部覆盖  二者最好不要一起用

​	

​	

# 08 本地应用 v-html指令

![image-20220822182910430](Vue.assets/image-20220822182910430.png)

![image-20220822183223914](Vue.assets/image-20220822183223914.png)

![image-20220822183233340](Vue.assets/image-20220822183233340.png)

v-on:monseenter 鼠标移入事件

​	

​	

# 09 本地应用 v-on指令基础

![image-20220822184255341](Vue.assets/image-20220822184255341.png)

![image-20220822184300509](Vue.assets/image-20220822184300509.png)

![image-20220822184305679](Vue.assets/image-20220822184305679.png)

​	

​	

# 10 本地应用 计数器

![image-20220822192842506](Vue.assets/image-20220822192842506.png)

![image-20220822192846793](Vue.assets/image-20220822192846793.png)

![image-20220822192852033](Vue.assets/image-20220822192852033.png)

![image-20220822192856303](Vue.assets/image-20220822192856303.png)

​	

​	

# 11 本地应用 v-show指令


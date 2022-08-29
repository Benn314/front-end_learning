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

![image-20220828231434494](Vue.assets/image-20220828231434494.png)

![image-20220828231442210](Vue.assets/image-20220828231442210.png)

![image-20220828231504349](Vue.assets/image-20220828231504349.png)

​	

**05_v-show指令.html**

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
      <input type="button" value="切换显示状态" @click="changeIsShow" />
      <input type="button" value="累加年龄" @click="addAge" />
      <img v-show="isShow" src="img/v-show.png" alt="" />
      <img v-show="age>=18" src="img/v-show.png" alt="" />
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          isShow: false,
          age: 17,
        },
        methods: {
          changeIsShow: function () {
            this.isShow = !this.isShow;
          },
          addAge: function () {
            this.age++;
          },
        },
      });
    </script>
  </body>
</html>

```

​	

![image-20220828232434134](Vue.assets/image-20220828232434134.png)

​	

​	

# 12 本地应用 v-if指令

![image-20220828233053651](Vue.assets/image-20220828233053651.png)

![image-20220828233120114](Vue.assets/image-20220828233120114.png)

![image-20220828233124697](Vue.assets/image-20220828233124697.png)

​	

> v-if 和 v-show的效果显示相同 但是 v-if 是将整个标签移除 而 v-show 是更改其标签的样式

​	

​	

# 13 本地应用 v-bind指令

![image-20220828235025126](Vue.assets/image-20220828235025126.png)

![image-20220828235038298](Vue.assets/image-20220828235038298.png)

![image-20220828235042514](Vue.assets/image-20220828235042514.png)

​	

![image-20220829000522744](Vue.assets/image-20220829000522744.png)

> 动态增删class属性  建议使用对象的方式来写 true的话显示 false就移除

​	

**06_v-bind指令.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-bind</title>
    <style>
      .active {
        border: 1px solid green;
      }
    </style>
  </head>
  <body>
    <!-- <img src="img/v-show.png" alt="" /> -->
    <div id="app">
      <img v-bind:src="imgSrc" alt="" />
      <br />
      <!-- 
        三元运算符的写法
        :class="isActive?'active':''" 
      -->
      <img
        :src="imgSrc"
        alt=""
        :title="imgTitle+'!!!'"
        :class="isActive?'active':''"
        @click="toggleActive"
      />
      <br />
      <!-- 
        使用对象的方式来动态增删class属性
        active:isActive
       -->
      <img
        :src="imgSrc"
        alt=""
        :title="imgTitle+'!!!'"
        :class="{active:isActive}"
        @click="toggleActive"
      />

      <!-- 可以用字符串拼接 -->
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          imgSrc: "img/v-show.png",
          imgTitle: "黑马程序员",
          isActive: false,
        },
        methods: {
          toggleActive: function () {
            this.isActive = !this.isActive;
          },
        },
      });
    </script>
  </body>
</html>

```

​	

![image-20220829000605836](Vue.assets/image-20220829000605836.png)

​	

​	

# 14 本地应用 图片切换

v-if是操作dom元素增加和删除 对性能消耗大

![image-20220829125748460](Vue.assets/image-20220829125748460.png)

![image-20220829125753606](Vue.assets/image-20220829125753606.png)

​	

**07_本地应用-图片切换.html**

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
    <div id="mask">
      <div class="center">
        <h2 class="title">
          <img src="" alt="暂无图片" />
        </h2>
        <!-- 图片 -->
        <!-- <img :src="img/00.JPG" alt="" /> -->
        <img :src="imgArr[index]" alt="" />
        <!-- 左箭头 v-show -->
        <!-- <a
          href="javascript:void(0)"
          v-show="index!=0"
          @click="prev"
          class="left"
        >
          <img src="img/prev.jpg" alt="" />
        </a> -->

        <!-- 左箭头 v-if -->
        <a href="javascript:void(0)" v-if="index!=0" @click="prev" class="left">
          <img src="img/prev.jpg" alt="" />
        </a>

        <!-- 右箭头 -->
        <a
          href="javascript:void(0)"
          v-show="index<imgArr.length-1"
          @click="next"
          class="right"
        >
          <img src="img/next.jpg" alt="" />
        </a>
      </div>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

    <script>
      var app = new Vue({
        el: "#mask",
        data: {
          imgArr: ["./img/00.jpg", "./img/01.jpg", "./img/02.jpg"],
          index: 0,
        },
        methods: {
          prev: function () {
            this.index--;
          },
          next: function () {
            this.index++;
          },
        },
      });
    </script>
  </body>
</html>

```

​	

![image-20220829131752426](Vue.assets/image-20220829131752426.png)

​	

​	

# 15 本地应用 v-for指令


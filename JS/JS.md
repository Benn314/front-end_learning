# 01_JS基础_JS简介

Java	一门编程语言

Script 脚本

Java 和 JavaScript 没啥关系

​	

![image-20220801114513412](JS.assets/image-20220801114513412.png)

​	

![image-20220801120016604](JS.assets/image-20220801120016604.png)

Chrome的v8引擎是所有浏览器引擎里对JS的实现支持最好最快的

不同浏览器用的引擎是不同的

​	

ECMAScript是标准	JavaScript是实现	这两个有等价关系

![image-20220801120357988](JS.assets/image-20220801120357988.png)

​	

![image-20220801120724724](JS.assets/image-20220801120724724.png)

![image-20220801120831549](JS.assets/image-20220801120831549.png)

DOM 和 BOM 都是提供一组对象来让我们操作浏览器

​	

![image-20220801121032231](JS.assets/image-20220801121032231.png)

​	

**JS 特点**

![image-20220801121121528](JS.assets/image-20220801121121528.png)

​	

解释型语言 

> 不用编译 写完可以直接运行	
>
> JavaScript跟python一样同解释型语言

​	

动态语言

> 对变量类型比较任意，不用定义变量类型，可以保存任何类型的变量值

​	

JS 也是面向对象语言

​	

​	

# 02_JS基础_JS的HelloWorld

​	

```html
【问题】 HTML style标签 注释样式为 <!-- --> 而不是 /* */ ？
【解决】找一下自己有没有安装jinja插件，将其禁用，就好了
		jinja一个模板插件 改变了原本vscode的注释样式

ctrl /			行注释
alt shift A		块注释
```

​	

**00_JS基础_HelloWorld.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <!-- 
        JS代码需要编写到script标签中 
            <script type="text/javascript"></script>
            <script></script>
            这两个等效 不写type属性 默认值也是type="text/javascript"
    -->
    <script>
      /*
        控制浏览器弹出一个警告框
        alert   警告
        alert("这是我的第一行JS代码"); 
      */

      /*
        让计算机在页面中输出一个内容
        document.write()    向body里输出一个内容
        document.write("看我出不出来就完事儿了");
      */

      /*
        向控制台输出一个内容
        console.log()   向控制台输出一个内容
        console.log("是陈舒舒呀！");
      */

      //自顶向下依次执行
      alert("这是我的第一行JS代码");
      document.write("看我出不出来就完事儿了");
      console.log("是陈舒舒呀！");
    </script>
    <style>
      /* <!--  -->   alt shift a
        <!--  -->   ctrl / */
      /*  */
    </style>
  </head>
  <body></body>
</html>

```

​	

![image-20220801143025946](JS.assets/image-20220801143025946.png)

​	

# 03_JS基础_js编写位置

​	

**01_JS基础_代码编写位置.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <!-- 
        可以将js代码编写到外部js文件中 然后通过script标签引入 
        写到外部文件中可以在不同的页面中同时引用 也可以利用到浏览器的缓存机制   推荐使用的方式
    -->
    <script src="js/script.js">
      /*
          script标签一旦用于引入外部文件了 就不能在编写代码了 即使编写了浏览器也会忽略
          如果需要 则可以再创建一个新的script标签用于编写内部代码
      */
      //   alert("我是内部的JS代码");   //引入外部js文件，所以失效了
    </script>
    <!-- 
        可以将js代码编写到script标签
        <script>
        alert("我是舒舒小可爱！");
        </script> 
    -->
    <script>
      alert("我是内部的JS代码"); //成功 代码自上而下执行
    </script>
  </head>
  <body>
    <!-- 
        可以将js代码编写到标签的onclick属性中 
        当我们点击按钮时 js代码才会执行
        onclick 鼠标单击
        属性值外面有双引号的，里面嵌套用单引号

        虽然可以写在标签的属性中 但是他们属于结构与行为耦合 不方便维护 所以不推荐使用
        这种形式也会用到 但不多
    -->
    <button onclick="alert('讨厌！');">点我一下</button>

    <!-- 
        可以将js代码写在超链接的href属性中
            这样当我们点击超链接时 会执行js代码
     -->
    <a href="javascript:alert('凯茵小可爱！😜');">你也点我一下</a>
    <a href="javascript:;">你也点我一下</a>
  </body>
</html>

```

​	

![image-20220801152007872](JS.assets/image-20220801152007872.png)

​	

​	

# 04_JS基础_基本语法


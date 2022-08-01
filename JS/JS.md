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



解释型语言 

> 不用编译 写完可以直接运行	
>
> JavaScript跟python一样同解释型语言



动态语言

> 对变量类型比较任意，不用定义变量类型，可以保存任何类型的变量值



JS 也是面向对象语言

​	

​	

# 02_JS基础_JS的HelloWorld

​	

```html
【问题】 HTML style标签 注释样式为 <!-- --> 而不是 /* */ ？
【解决】找一下自己有没有安装jinja插件，将其禁用，就好了
		jinja一个模板插件 改变了原本vscode的注释yang'shi
```



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
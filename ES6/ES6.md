# 01 js面向对象学习目标

![image-20220814105141908](ES6.assets/image-20220814105141908.png)

![image-20220814105232382](ES6.assets/image-20220814105232382.png)

​	

​	

# 02 js面向对象编程介绍

![image-20220814105408625](ES6.assets/image-20220814105408625.png)

![image-20220814105827960](ES6.assets/image-20220814105827960.png)

![image-20220814110219384](ES6.assets/image-20220814110219384.png)

​	

​	

# 03 ES6中的类和对象

![image-20220814110933057](ES6.assets/image-20220814110933057.png)

![image-20220814110938939](ES6.assets/image-20220814110938939.png)

![image-20220814110943393](ES6.assets/image-20220814110943393.png)

![image-20220814110949414](ES6.assets/image-20220814110949414.png)

​	

​	

# 04 创建类

![image-20220814112240397](ES6.assets/image-20220814112240397.png)

![image-20220814112332649](ES6.assets/image-20220814112332649.png)

​	

**01_创建类和对象.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      //1.创建类 class 创建一个明星类
      class Star {
        constructor(uname, age) {
          this.uname = uname;
          this.age = age;
        }
      }

      //2.利用类创建对象 new
      var ldh = new Star("刘德华", 18);
      var zxy = new Star("张学友", 20);
      console.log(ldh.uname);
      console.log(zxy.uname);
      console.log(ldh);
      console.log(zxy);

      /* 
        1 通过class 关键字创建类 类名我们还是习惯性定义首字母大写
        2 类里面有个constructor 函数 可以接收传递过来的参数 同时返回实例对象
        3 constructor 函数 只要 new 生成实例时 就会自动调用这个函数 如果我们不写这个函数
            类也会自动生成这个构造函数
        4 生成实例 new 不能省略
        5 最后注意语法规范 创建类 类名后面不要加小括号() 
            生成实例 类名后面加小括号() 
            构造函数不需要加function
      */
    </script>
  </head>
  <body></body>
</html>

```


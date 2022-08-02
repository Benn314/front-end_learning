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

​	

**02_JS基础_基本语法.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
        多行注释
        JS注释
        多行注释 注释中的内容不会执行 但可以在源代码查看
        */
      // 单行注释  可以通过注释对代码进行简单的调试

      /* 
        1.JS中严格区分大小写
        2.JS中每一条语句以 分号; 结尾
            如果不写分号 浏览器会自动添加 但是会消耗资源
                而且有些时候 浏览器会加错分号 所以在开发中分号必须写
        3.JS中会忽略多个空格和换行 所以我们可以利用空格和换行对代码进行格式化
      */
    </script>
  </head>
  <body></body>
</html>

```

​	

# 05_JS基础_字面量和变量

​	

**03_JS基础_字面量和变量.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
        字面量 都是一些不可改变的值 也就是常量
            比如 1 2 3 4 5......
            字面量都是可以直接使用的 但是我们一般都不会直接使用字面量

        变量 可以用来保存字面量 而且变量的值可以任意改变的
            变量更加方便我们使用 所以在开发中都是通过变量去保存一个字面量
            而很少直接使用字面量

       */

      // 声明变量
      //在js中使用var关键字来声明一个变量
      var a;
      a = 123;
      console.log("a = " + a);
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 06_JS基础_标识符

​	

**04_JS基础_标识符.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
        标识符
            在JS中所有的可以由我们自主命名的都可以称为是标识符
            例如 变量名 函数名 属性名都属于标识符
            命名一个标识符时需要遵守如下的规则：
                1.标识符中可以含有字母、数字、_ 、$
                2.标识符不嫩以数字开头
                3.标识符不能是ES中的关键字或保留字
                4.标识符一般都采用驼峰命名法
                    首字母小写 每个单词的开头字母大写 其余字母小写

            JS底层保存标识符实际上是采用的Unicode编码
                所以理论上讲 所有utf-8中含有的内容都可以作为标识符
        */
      var a_1_$ = 123;
      console.log(a_1_$);

      var 舒舒 = 101; //能这么命名 但千万别这么用
      console.log(舒舒);
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 07_JS基础_字符串

​	

**05_JS基础_数据类型.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      var a = 123;
      /*
        JS的语法跟C和JAVA像 谁跟C都像 主要是JS跟Java像
        数据类型指的是字面量的类型
        在JS中一共有六种数据类型
            String      字符串
            Number      数值
            Boolean     布尔值
            Null        空值
            Underfined  未定义
            Object      对象

        除了Object属于引用数据类型 其他都是基本数据类型

      */

      /*
        String字符串
            在JS中字符串需要使用引号引起来
            使用 双引号 单引号 都可以 但是不要混着用
            引号不能嵌套 双引号不能放双引号 单引号不能放单引号

            \" 表示 "
            \' 表示 '
            \n 换行
            \t 制表符 Tab
            \\ 表示 \
      */
      var str = "hello";
      console.log(str);
      var str1 = "我说：'舒舒小可爱'",
        str2 = '我说："凯茵小可爱"'; //谁（单引号/双引号）嵌套谁（单引号/双引号）都可以

      console.log(str1 + "\n" + str2);

      /*
        在字符串中我们可以使用 \ 作为转义字符
            当表示一些特殊符号是可以使用 \ 进行
      */
      str3 = '我说："舒舒小可爱"';
      console.log(str3);

      str4 = "\\\\"; //俩 \ 表示一个\    第一个 \ 是转义
      console.log("\n" + str4);
    </script>
  </head>
  <body></body>
</html>

```

​	

![image-20220802084402460](JS.assets/image-20220802084402460.png)

​	

​	

# 08_JS基础_Number

​	

**06_JS基础_Number.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            在JS中所有的数值都是Number类型
            包括整数和浮点数

            整数和浮点数都是Number类型
        */
      var a = 123;
      var b = "123";
      console.log(a);
      console.log(b);
      //输出结果都是123 但本质数据类型不同

      /* 
        可以使用一个运算符typeof
            来检查一个变量的类型
        语法：typeof 变量
        检查字符串时 会返回String
        检查数值时 会返回number
      */
      console.log(typeof a); //number
      console.log(typeof b); //String

      //   console.log(); 本身就自带换行
      //    JS中可以表示的数字的最大值 Number.MAX_VALUE
      //打印输出比最大值还大的值 输出到控制台的结果是 Infinity 表示正无穷
      // -Infinity  负无穷
      //使用typeof检查Infinity也会返回Number
      console.log(Number.MAX_VALUE); //Number的最大值为：2^1024（1.7976931348623157e+308）

      a = "abc" * "bcd";
      console.log(a); //NaN 不是数字
      //NaN 是一个特殊的数字 表示Not A Number

      a = NaN;
      console.log(a + "\t" + typeof a); // a的数据类型还是number
      // 使用typeof检查NaN也会返回number

      a = Number.MIN_VALUE;
      console.log(a); //5e-324 = 2^(-1074)  表示0以上的最小值
      //Number.MIN_VALUE 大于0的最小值

      /* 
        在JS中整数的运算基本可以保证精确
        如果使用JS进行浮点运算 可能得到一个不精确的结果
        所以千万不要使用JS进行对精确度要求比较高的运算
      */
      var c = 0.1 + 0.2;
      console.log(c); //0.30000000000000004
    </script>
  </head>
  <body></body>
</html>

```



![image-20220802105747904](JS.assets/image-20220802105747904.png)

​	

# 09_JS基础_布尔值

![image-20220802110552180](JS.assets/image-20220802110552180.png)

​	

# 10_JS基础_Null和Undefined

​	

**08_JS基础_Null和Undefined.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
        Null（空值）类型的值只有一个 就是null
        null这个值专门用来表示一个为空的对象
        使用typeof检查一个null值时 会返回object

        Undefined（未定义）类型的值只有一个 就是undefined
            当声明一个变量 但是并不给变量赋值时 它的值就是Undefined
            使用typeof检查一个undefined时也会返回undefined
        */
      var a = null;
      console.log(typeof a); //object

      var b;
      var c = undefined;
      console.log(b + " " + c); //undefined undefined
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 11_JS基础_强制类型转换—String

​	

**09_JS基础_强制类型转换.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <script>
    /* 
        强制类型转换
            指将一个数据类型强制转换为其他的数据类型
            类型转换主要指 将其他的数据类型 转换为 String Number Boolean
    */

    /*
        将其他数据类型转换成String
        方式一：
            调用被转换数据类型的toString()方法
            该方法不会影响到原变量 它会将转换的结果返回
            但是注意：null和undefined这两个值没有toString()方法，
                如果调用它们的方法 会报错

        方式二：
            调用String()函数 并将被转换的数据作为参数传递给函数
            使用String()函数做强制类型转换时
                对于Number和Boolean实际上就是调用的toString()方法
                但是对于null和undefined 就不会调用toString()方法
                    它会将null 直接转换为 "null"
                    将undefined 直接转换为 "undefined"
    */
    var a = 123;
    console.log(typeof a + "  " + a); //number  123
    a.toString();
    console.log(typeof a + "  " + a); //number  123 结果还是没变
    var b = a.toString();
    console.log(typeof b + "  " + b); //string  123 需要一个新变量来承接 成功返回String

    //如果想直接改变a的数据类型 拿a承接就行啦
    a = a.toString();
    console.log(typeof a + "  " + a); //string  123

    a = null;
    // a = a.toString();
    // console.log(typeof a);  //error

    a = undefined;
    // a = a.toString();
    // console.log(typeof a);  //error
    // console.log(a);

    a = 123;
    console.log(typeof a);
    console.log(a);

    //调用String()函数 来将a转换成字符串
    // String(a);  //这么写 a还是number 要重新赋值
    a = null;
    a = undefined;
    a = true;
    a = String(a);

    console.log(typeof a);
    console.log(a);
  </script>
  <body></body>
</html>

```

​	

​	

# 12_JS基础_强制类型转换—Number



​	**10_JS基础_转换为Number.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            将其他的数据类型转换成Number
            转换方式一：
                使用Number()函数
                    字符串 --> 数字
                        1.如果是纯数字的字符串 则直接将转换成数字
                        2.如果字符串中有非数字的内容 则转换成NaN
                        3.如果字符串是一个空串或者是一个全是空格的字符串 则转换为0
                    
                    布尔 --> 数字
                        true 转成1
                        false 转成0
                    Null 转成数字  0
                    undefined 转换数字 NaN

            转换方式二：
                这种方式专门用来对付字符串
                parseInt() 把一个字符串转换为一个整数
                parseFloat() 把一个字符串转换为一个浮点数
        */

      var a = "10abc";
      a = ""; //number  0
      a = "        "; ////number  0
      a = true; //number  1
      a = false; //number  0
      a = null; //number  0
      a = undefined; //number  NaN

      //调用Number()函数来讲a转换为Number类型
      a = Number(a);

      a = "1234px123"; //number  1234
      a = "123.456"; //number  123
      //调用parseInt()函数将a转换为Number
      /* 
        parseInt()可以将一个字符串中的有效的整数内容取出去
            然后转换为Number（从左往右 碰到非数字则停止提取）
      */
      a = parseInt(a);

      /* 
        parseFloat()作用和parseInt()类似 不同的是它可以获得有效的小数
      */
      a = "123.456px";
      a = parseFloat(a); //number  123.456

      /* 
        如果对非String使用parseInt()或parseFloat()
            它会先将其转换为String 然后再操作
      */
      a = true;
      a = parseInt(a); //number  NaN
      //等同于 a = parseInt("true");

      //可以用parseInt()这么取整
      a = 123.456;
      a = parseInt(a); //number  123

      console.log(typeof a + "  " + a); // number  NaN    NaN 属于Number数据类型
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 13_JS基础_其他进制的数字

​	

**11_JS基础_其他的进制的数字.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      var a = 123;
      /* 
            在js中 如果需要表示16进制的数字 则需要以0x开头
                8进制以0开头
                如果要表示2进制的数字 则需要以0b开头
                    但是 不是所有的浏览器都支持
        */
      //十六进制
      a = 0x10; //16

      //八进制
      a = 070; //56

      //二进制
      a = 0b10; //2

      //Google Chrome是当作10进制解析
      //像"070"这种字符串 有些浏览器会当成8进制解析 有些当成10进制解析
      a = "070";
      //可以在parseInt()中传递第二个参数，来指定数字的进制
      a = parseInt(a, 8);
      console.log(a); //无论几进制 输出都以10进制输出
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 14_JS基础_转换成Boolean

​	

**12_JS基础_转换成Boolean.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            将其他的数据类型转换为Boolean
                使用Boolea()函数
                    数字 -->  布尔
                        除了0和NaN是false 其余的都是true
                        
                    字符串 --> 布尔
                        除了空串 其余的都是true

                    null和undefined都会转换成false

                    对象也会转换为true
        */
      a = null;
      a = 0.1; //true
      a = Boolean(a);
      console.log(typeof a + "\t" + a);
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 15_JS基础_算数运算符

​	

**13_JS基础_运算符.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            运算符也叫操作符
                通过运算符可以对一个或多个值进行运算 并获取运算结果
                比如：typeof就是运算符 可以来获取一个值的类型
                    它会将该值的类型以字符串的形式返回
                    number string boolean undefined object

            算数运算符
                当对非Number类型的值进行运算时 会将在这些值转换成Number 然后再运算
                null转数字是0
                任何值和NaN做运算都得NaN
                *
                /
                +
                    对number是运算 对string是连接
                    任何值和字符串做加法运算 都会先转换为字符串 然后再和字符串做拼串连接的操作
                -
                %
        */
      var a = 123;
      var reslut = typeof a;

      console.log(typeof a + "\t" + typeof reslut); //number	string

      a = true + " hello";
      console.log(a); //true hello

      //巧妙将变量变为字符串(隐式类型转换) 由浏览器自动完成 实际上它也是调用String()函数
      var c = 123;
      c = null; //string  null
      c = c + "";

      //小练习
      c = 1 + 2 + "3"; //string  33  从左往右计算
      c = "1" + 2 + 3; //string  123  从左往右计算

      c = 2 * "8"; //number  16  运算会转换成Number
      c = 2 * undefined; //number  NaN
      c = 2 * null; //number  0
      c = 2 * false; //number  0

      /* 
        任何值做 - * / 运算时都会自动转换成Number
         我们可以利用这一特点做隐式的类型转换
            可以通过为一个值 -0 *1 /1 来将其转换成Number
            原理和Number()函数一样 使用起来更加简单
      */
      console.log(typeof c + "  " + c);
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 16_JS基础_一元运算符

​	

**14_JS基础_一元运算符.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            一元运算符 只需要一个操作数

            对于非Number类型的值
                它会先转换成Number 然后在运算
                可以对一个其他的数据类型使用+ 来将其转换为number
        */
      a = "19"; //string  19
      a = +a; //number  19
      a = true;
      a = +a; //number  1
      //   console.log(typeof a + "  " + a);

      var result = 1 + "2" + 3; //string  123
      var result = 1 + +"2" + 3; //number  6     一元运算符优先级高于二元运算符
      //也是隐式类型转换
      console.log(typeof result + "  " + result);
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 17_JS基础_自增和自减

​	

![image-20220802223034542](JS.assets/image-20220802223034542.png)

![image-20220802223129736](JS.assets/image-20220802223129736.png)

​	

**15_JS基础_自增和自减.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      var d = 20;

      //小练习
      //20 + 22 + 22
      var result = d++ + ++d + d;
      console.log("result = " + result);

      //自增自减不用变量承接赋值 直接写就行
      d++; //等同于 d = d + 1;
      ++d; //等同于 d = d + 1;

      //自减原理跟自加相同 这里便不赘述了
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 18_JS基础_自增练习

![image-20220802223620946](JS.assets/image-20220802223620946.png)

![image-20220802223628191](JS.assets/image-20220802223628191.png)

​	

​	

# 19_JS基础_逻辑运算符

​	


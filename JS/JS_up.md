# 118_JS基础_拖拽（一）

​	

**97_JS基础_拖拽.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
      }
      #box2 {
        width: 100px;
        height: 100px;
        background-color: yellow;
        position: absolute;

        left: 200px;
        top: 200px;
      }
    </style>
    <script>
      window.onload = function () {
        /* 
            拖拽元素
                拖拽流程
                    1.当鼠标在被拖拽元素上按下时 开始拖拽 onmousedown
                    2.当鼠标移动时 被拖拽元素跟随鼠标移动 onmousemove
                    3.当鼠标松开时 被拖拽元素固定在当前位置 onmouseup
        */

        //获取box1
        var box1 = document.getElementById("box1");
        //为box1绑定一个鼠标按下事件
        //当鼠标在被拖拽元素上按下时 开始拖拽 onmousedown
        box1.onmousedown = function (event) {
          event = event || window.event;
          //div的偏移量 鼠标.clientX - 元素.offsetLeft
          //div的偏移量 鼠标.clientY - 元素.offsetTop
          var ol = event.clientX - box1.offsetLeft;
          var ot = event.clientY - box1.offsetTop;

          //onmousedown的event 和 onmousemove的event是不一样的

          //为document绑定一个onmousemove事件
          document.onmousemove = function (event) {
            event = event || window.event;
            //当鼠标移动时 被拖拽元素跟随鼠标移动 onmousemove
            //获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改box1的位置
            box1.style.left = left + "px";
            box1.style.top = top + "px";
          };

          //为元素绑定一个鼠标松开事件
          //   box1.onmouseup = function () {
          document.onmouseup = function () {
            /*  如果是box1的onmouseup的话 将box1拖拽到box2位置松开 
                    会发现box1并没有停止移动 而是跟随鼠标继续运动 
                    因为到box2松开鼠标是触发box2的事件 不是box1的，
                    所以这里要把box1改成全局的document，就可以解决啦 
            */

            //当鼠标松开时 被拖拽元素固定在当前位置 onmouseup
            //取消document的onmousemove事件
            document.onmousemove = null;

            //取消document的onmouseup事件
            document.onmouseup = null;

            // alert("鼠标松开了");
          };
        };
      };
    </script>
  </head>
  <body>
    <div id="box1"></div>
    <div id="box2"></div>
  </body>
</html>

```

​	

​	

# 119_JS基础_拖拽（二）

![image-20220811221911093](JS_up.assets/image-20220811221911093.png)

![image-20220811222203931](JS_up.assets/image-20220811222203931.png)

要获取浏览器的什么信息可以传入event参数来获取

​	

**98_JS基础_拖拽-IE8和其他浏览器-兼容.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
      }
      #box2 {
        width: 100px;
        height: 100px;
        background-color: yellow;
        position: absolute;

        left: 200px;
        top: 200px;
      }
    </style>
    <script>
      window.onload = function () {
        /* 
            拖拽元素
                拖拽流程
                    1.当鼠标在被拖拽元素上按下时 开始拖拽 onmousedown
                    2.当鼠标移动时 被拖拽元素跟随鼠标移动 onmousemove
                    3.当鼠标松开时 被拖拽元素固定在当前位置 onmouseup
        */

        //获取box1
        var box1 = document.getElementById("box1");
        //获取box2
        var box2 = document.getElementById("box2");

        //为box1绑定一个鼠标按下事件
        //当鼠标在被拖拽元素上按下时 开始拖拽 onmousedown
        box1.onmousedown = function (event) {
          //设置box1捕获所有鼠标按下的事件
          /* 
            setCapture()
              只有IE支持 但是火狐中调用时不会报错
                而如果使用chrome调用 会报错
          */

          // 写法一
          // if (box1.setCapture) {
          //   box1.setCapture();
          // }

          //写法二
          // 也可以这么写
          box1.setCapture && box1.setCapture();
          //如果第一个为true 则第二个也执行
          //如果第一个为false 第二个也就不用执行

          //完了需要设置releaseCapture来取消对鼠标的捕获
          //  不然鼠标移向空白地方点击依然会捕获box1并移动

          event = event || window.event;
          //div的偏移量 鼠标.clientX - 元素.offsetLeft
          //div的偏移量 鼠标.clientY - 元素.offsetTop
          var ol = event.clientX - box1.offsetLeft;
          var ot = event.clientY - box1.offsetTop;

          //onmousedown的event 和 onmousemove的event是不一样的

          //为document绑定一个onmousemove事件
          document.onmousemove = function (event) {
            event = event || window.event;
            //当鼠标移动时 被拖拽元素跟随鼠标移动 onmousemove
            //获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改box1的位置
            box1.style.left = left + "px";
            box1.style.top = top + "px";
          };

          //为元素绑定一个鼠标松开事件
          //   box1.onmouseup = function () {
          document.onmouseup = function () {
            /*  如果是box1的onmouseup的话 将box1拖拽到box2位置松开 
                    会发现box1并没有停止移动 而是跟随鼠标继续运动 
                    因为到box2松开鼠标是触发box2的事件 不是box1的，
                    所以这里要把box1改成全局的document，就可以解决啦 
            */

            //当鼠标松开时 被拖拽元素固定在当前位置 onmouseup
            //取消document的onmousemove事件
            document.onmousemove = null;

            //取消document的onmouseup事件
            document.onmouseup = null;

            // alert("鼠标松开了");

            //当鼠标松开时 取消对事件的捕获
            box1.releaseCapture && box1.releaseCapture();
          };

          /* 
            当我们拖拽一个网页中的内容时 浏览器会默认去搜索引擎中搜索内容
              此时会导致拖拽功能的异常 这个是浏览器提供的默认行为
              如果不希望发生这个行为 则可以通过return false来取消默认行为

            但是这招对IE8不起作用
          */
          return false; //这个也得写 上面releaseCapture()只是针对IE的
        };
      };
    </script>
  </head>
  <body>
    我是一段文字
    <div id="box1"></div>
    <div id="box2"></div>
  </body>
</html>

```

​	

​	

# 120_JS基础_拖拽（三）

​	

**99_JS基础_拖拽-测试IE8.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      body {
        border: 1px solid red;
      }
    </style>
    <script>
      // capture 捕获

      window.onload = function () {
        //分别为两个按钮绑定单击响应函数
        var btn01 = document.getElementById("btn01");
        var btn02 = document.getElementById("btn02");

        btn01.onclick = function () {
          alert(1);
        };
        btn02.onclick = function () {
          alert(2);
        };

        //设置btn01对鼠标按下相关的事件进行捕获
        /*        
            当调用一个元素的setCapture()方法以后 这个元素将会把下一次
                所有的鼠标按下相关的事情捕获到自身上 
          */
        btn01.setCapture();
      };
    </script>
  </head>
  <body>
    <button id="btn01">按钮01</button>
    <button id="btn02">按钮02</button>
  </body>
</html>

```

​	

**100_JS基础_拖拽-测试3.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
      }
      #box2 {
        width: 100px;
        height: 100px;
        background-color: yellow;
        position: absolute;

        left: 200px;
        top: 200px;
      }
    </style>
    <script>
      window.onload = function () {
        /* 
            拖拽元素
                拖拽流程
                    1.当鼠标在被拖拽元素上按下时 开始拖拽 onmousedown
                    2.当鼠标移动时 被拖拽元素跟随鼠标移动 onmousemove
                    3.当鼠标松开时 被拖拽元素固定在当前位置 onmouseup
        */

        //获取box1
        var box1 = document.getElementById("box1");
        //获取box2
        var box2 = document.getElementById("box2");
        var img2 = document.getElementById("img2");

        //开启box1的拖拽
        drag(box1);
        //开启box2的拖拽
        drag(box2);

        drag(img2);
      };

      /* 
        提取一个专门用来设置拖拽的函数
        参数：开启拖拽的元素
      */
      function drag(obj) {
        //box2
        obj.onmousedown = function (event) {
          //设置box2捕获所有鼠标按下的事件
          /* 
            setCapture()
              只有IE支持 但是火狐中调用时不会报错
                而如果使用chrome调用 会报错
          */

          obj.setCapture && obj.setCapture();
          //如果第一个为true 则第二个也执行
          //如果第一个为false 第二个也就不用执行

          //完了需要设置releaseCapture来取消对鼠标的捕获
          //  不然鼠标移向空白地方点击依然会捕获box1并移动

          event = event || window.event;
          //div的偏移量 鼠标.clientX - 元素.offsetLeft
          //div的偏移量 鼠标.clientY - 元素.offsetTop
          var ol = event.clientX - obj.offsetLeft;
          var ot = event.clientY - obj.offsetTop;

          //onmousedown的event 和 onmousemove的event是不一样的

          //为document绑定一个onmousemove事件
          document.onmousemove = function (event) {
            event = event || window.event;
            //当鼠标移动时 被拖拽元素跟随鼠标移动 onmousemove
            //获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改box2的位置
            obj.style.left = left + "px";
            obj.style.top = top + "px";
          };

          //为元素绑定一个鼠标松开事件
          document.onmouseup = function () {
            //当鼠标松开时 被拖拽元素固定在当前位置 onmouseup
            //取消document的onmousemove事件
            document.onmousemove = null;

            //取消document的onmouseup事件
            document.onmouseup = null;

            //当鼠标松开时 取消对事件的捕获
            obj.releaseCapture && obj.releaseCapture();
          };

          return false;
        };
      }
    </script>
  </head>
  <body>
    我是一段文字
    <div id="box1"></div>
    <div id="box2"></div>
    <img
      id="img2"
      src="img/2.JPG"
      alt=""
      style="width: 200px; position: absolute"
    />
    <!-- 记得要开启定位才能进行拖拽！ -->
  </body>
</html>

```

​	

​	

# 121_JS基础_滚轮的事件

​	

**101_JS基础_鼠标滚轮事件.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
    <script>
      window.onload = function () {
        /* 
                当鼠标滚轮向下滚动时 box1变长
                  当滚轮向上滚动时 box1变短
            */

        //获取id为box1的div
        var box1 = document.getElementById("box1");

        //为box1绑定一个鼠标滚轮滚动的事件
        /* 
            onmousewheel鼠标滚轮事件 会在滚轮滚动时触发
                但是火狐不支持该属性

            在火狐中需要使用 DOMMouseScroll 来绑定滚动事件
                注意该事件需要通过addEventListener()函数来绑定
        */
        box1.onmousewheel = function (event) {
          event = event || window.event;
          /*           
            
            event.wheelDelta 可以获取鼠标滚轮滚动的方向
            向上滚 180 向下滚 -180
            wheelDelta这个值我们不看大小 只看正负 
          */
          //   alert(event.wheelDelta);
          //   alert("滚了~~");

          /* 
            wheelDelta这个属性火狐中不支持
            在火狐中使用event.detail来获取滚动的方向
            向上滚 -3 向下滚 3
          */
          //   alert(event.detail);

          /* 
            当鼠标滚轮向下 box1变长
              当滚轮向上滚动时 box1变短
            */
          //判断鼠标滚轮滚动的方向
          if (event.wheelDelta > 0 || event.detail < 0) {
            // alert("向上滚");
            //向上滚 box1变短
            box1.style.height = box1.clientHeight - 10 + "px";
          } else {
            // alert("向下滚");
            //向下滚 box1变长
            box1.style.height = box1.clientHeight + 10 + "px";
          }

          /* 
            使用addEventListener()方法绑定响应函数 取消默认行为不能使用return false
            需要使用event来取消默认行为event.preventDefault();
            但是IE8不支持event.preventDefault(); 如果直接调用会报错
          */
          event.preventDefault && event.preventDefault();

          /* 
          当滚轮滚动时 如果浏览器有滚动条 滚动条会随之滚动
          这是浏览器的默认行为 如果不希望发生 则可以取消默认行为
         */
          return false;
        };

        bind(box1, "DOMMouseScroll", box1.onmousewheel);
      };

      function bind(obj, eventStr, callback) {
        if (obj.addEventListener) {
          //大部分浏览器兼容的方式
          obj.addEventListener(eventStr, callback, false);
        } else {
          /* 
                this是谁由调用方式决定
                callback.call(obj)
            */

          //IE8及以下
          obj.attachEvent("on" + eventStr, function () {
            //在匿名函数中调用回调函数
            callback.call(obj);
          });
        }
      }
    </script>
  </head>
  <body style="height: 2000px">
    <div id="box1"></div>
  </body>
</html>

```

​	

​	

# 122_JS基础_键盘事件

​	

**102_JS基础_键盘事件.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      window.onload = function () {
        /* 
                键盘事件
                  onkeydown
                    按键被按下
                    对于onkeydown来说如果一直按着某个按键不松手 则事件会一直触发
                    当onkeydown连续触发时 第一次和第二次之间会间隔稍微长一点 其他的会非常的快
                        这种设计是为了防止误操作的发生
                  onkeyup
                    按键被松开
                 
                  键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document
            */
        document.onkeydown = function (event) {
          //   console.log("按键被按下了");
          event = event || window.event;

          /* 
            可以通过keyCode来获取按键的编码
              通过它可以判断哪个按键被按下
            除了keyCode 事件对象中还提供了几个属性
                altKey
                ctrlKey
                shiftKey
                    这三个用来判断alt ctrl 和shift是否被按下
                        如果按下则返回true 否则返回false
        */
          //   console.log(event.keyCode);

          //判断一个y是否被按下
          //判断y和ctrl是否同时被按下
          if (event.keyCode === 89 && event.ctrlKey) {
            console.log("ctrl和y被按下了");
          }
        };
        // document.onkeyup = function () {
        //   console.log("按键被松开了");
        // };

        //获取input
        var input = document.getElementsByTagName("input")[0];

        input.onkeydown = function (event) {
          //   console.log("按键被按下了");

          event = event || window.event;

          //使文本框不能输入数字
          //   console.log(event.keyCode); //获取数字的Code
          // 数字0-9 对应code 48-57
          console.log("按键被按下了");
          if (event.keyCode >= 48 && event.keyCode <= 57) {
            /* 
            在文本框中输入内容 属于onkeydown的默认行为
            如果在onkeydown中取消了默认行为 则输入内容 不会出现在文本框中
          */

            return false; //控制台有打印信息 但输入框没显示信息
          }
        };
      };
    </script>
  </head>
  <body>
    <input type="text" />
  </body>
</html>

```

​	

​	

# 123_JS基础_键盘移动div

**103_JS基础_键盘移动div练习.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
      }
    </style>
    <script>
      //使div可以根据不同的方向键向不同的方向移动
      /* 
        按上键 div向上移
        按下键 div向下移
        按左键 div向左移
        按右键 div向右移

        */

      window.onload = function () {
        //document绑定一个按键按下的事件
        document.onkeydown = function (event) {
          event = event || window.event;

          //定义一个变量 来表示移动的速度
          var speed = 10;

          //当用户按了ctrl以后 速度加快
          if (event.ctrlKey) {
            speed = 50;
          }

          /* 
                    37 左
                    38 上
                    39 右
                    40 下
                */
          //   console.log(event.keyCode);

          switch (event.keyCode) {
            case 37:
              //   alert("向左"); left值减小
              box1.style.left = box1.offsetLeft - speed + "px";
              break;
            case 38:
              //   alert("向上");
              box1.style.top = box1.offsetTop - speed + "px";

              break;
            case 39:
              //   alert("向右");
              box1.style.left = box1.offsetLeft + speed + "px";

              break;
            case 40:
              //   alert("向下");
              box1.style.top = box1.offsetTop + speed + "px";
              break;
          }
        };
      };
    </script>
  </head>
  <body>
    <div id="box1"></div>
  </body>
</html>

```

​	

​	

DOM是JS用来操作网页的

BOM是JS用来操作浏览器的

# 124_JS基础_Navigator

userAgent等价于浏览器

说用户代理是怎么显示的也就是说浏览器是怎么显示的

如果通过userAgent的信息（正则表达式提取）无法区分是来自什么浏览器 可以通过浏览器特定的属性/方法作为判断条件来区分

​	

**104_JS基础_BOM.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            BOM
                浏览器对象模型
                BOM可以使我们通过JS来操作浏览器
                在BOM中为我们提供了一组对象 用来完成对浏览器的操作
                BOM对象
                    Window
                        代表的是整个浏览器的窗口 同时window也是网页中的全局对象
                    Navigator
                        代表的当前浏览器的信息 通过该对象可以来识别不同的浏览器
                    Location
                        代表当前浏览器的地址栏信息 通过Location可以获取地址栏信息 或者操作浏览器跳转页面
                    History
                        代表浏览器的历史记录 可以通过该对象来操作浏览器的历史记录
                            由于隐私原因 该对象不能获取到具体的历史记录 只能操作浏览器向前或向后翻页
                            而且该操作只在当次访问时有效
                    Screen
                        代表用户的屏幕的信息 通过该对象可以获取到用户的显示器的相关的信息

                    这些BOM对象在浏览器中都是作为window对象的属性保存的
                        可以通过window对象来使用 也可以直接使用
        */

      //   console.log(window.navigator); //Navigator
      //   console.log(navigator); //Navigator
      //   console.log(location); //
      //   console.log(history); //

      /* 
        Navigator
            代表的当前浏览器的信息 通过该对象可以来识别不同的浏览器
            由于历史原因 Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了
            一般我们只会使用userAgent来判断浏览器的信息
                userAgent是一个字符串 
                这个字符串中包含有用来描述浏览器信息的内容
                不同的浏览器会有不同的userAgent

            Chrome的userAgent
                Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36
            Firefox的userAgent
                 Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0
            IE8的userAgent
                Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0)
            IE9的userAgent
                Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0)
            IE10的userAgent
                Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0)
            IE11的userAgent
                Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0; rv:11.0) like Gecko
                在IE11中已经将微软和IE相关的标识都已经去除了 所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了
        */
      //   alert(navigator.appName); //Netscape
      //   console.log(navigator.userAgent);
      var ua = navigator.userAgent;
      //   console.log(ua);
      //   alert(ua);

      if (/firefox/i.test(ua)) {
        alert("你是火狐！！！");
      } else if (/chrome/i.test(ua)) {
        alert("你是chrome！！！");
      } else if (/msie/i.test(ua)) {
        alert("你是IE浏览器~~~");
      } else if ("ActiveXObject" in window) {
        alert("你是IE11，枪毙了你~~~");
      }

      /* 
        如果通过UserAgent不能判断 还可以通过一些浏览器中特有的对象 来判断浏览器的信息
        比如：ActiveXObject
      */
      /*       
        有欠缺版 无法识别 IE11
        if (window.ActiveXObject) {
            alert("你是IE，我已经抓住你了~~~");
        } else {
            alert("你不是IE~~~");
        } 

        //完美版 所以IE版本浏览器都适用
        //   if ("ActiveXObject" in window) {
        //     alert("你是IE，我已经抓住你了~~~");
        //   } else {
        //     alert("你不是IE~~~");
        //   }
      */

      //   alert("ActiveXObject" in window);
      /*
        IE11动了点手脚 将window.ActiveXObject转换成布尔值
        !!window.ActiveXObject == false (本应是true)
        所以我们不能把这个语句作为判断条件语句
        应修改为"ActiveObject" in window
        
        IE 11 通过 userAgent的rv:11.0 作为判断是否为IE 11浏览器可能出现误伤 
        就是无法精准100% 所以不用这个
      */
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 125_JS基础_History

​	

**105_JS基础_History.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
            History
                对象可以用来操作浏览器向前或向后翻页
        */

      window.onload = function () {
        //获取按钮对象
        var btn = document.getElementById("btn");

        btn.onclick = function () {
          /* 
            length
                属性 可以获取到当前访问的链接数量
                因为当前网页 如果有超链接跳转至此页面的话 
                    我们是可以后退的 所以当前页面是有记录先前跳转前链接的记录
                    那么也就有记录链接数量（即链接长度）
             */
          //   alert(history.length);
          /* 
            back()
                可以用来回退到上一个页面 作用和浏览器的回退按钮一样
          */
          //   history.back();
          /* 
            forward()
                可以跳转下一个页面 作用和浏览器的前进按钮一样
            */
          //   history.forward();
          /* 
            go()
                可以用来跳转到指定的页面
                它需要一个整数作为参数
                  1 表示向前跳转一个页面 相对于forward
                  2 表示向前跳转两个页面
                  -1 表示向后跳转一个页面 相对于back
                  -2 表示向后跳转两个页面
                  
        */
          history.go();
        };
      };
    </script>
  </head>
  <body>
    <button id="btn">点我一下</button>
    <h1>History</h1>
    <a href="106_JS基础_History_test01.html">去 History_test01</a>
  </body>
</html>

```

​	

**106_JS基础_History_test01.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <h1>TEST01</h1>
    <a href="107_JS基础_History_test02.html">去 History_test02</a>
  </body>
</html>

```

​	

**107_JS基础_History_test02.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <h1>TEST02</h1>
    <a href="105_JS基础_History.html">去 History.html</a>
  </body>
</html>

```

​	

​	

# 126_JS基础_Location

​	

**108_JS基础_Location.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      /* 
        Location
            该对象封装了浏览器地址栏的信息
        */

      window.onload = function () {
        //获取按钮对象
        var btn = document.getElementById("btn");

        btn.onclick = function () {
          //如果直接打印location 则可以获取到地址栏的信息(当前页面的完整路径)
          //   alert(location);
          /* 
            如果直接将location属性修改为一个完整的路径 或相对路径
              则我们页面会自动跳转到该路径 并且会生成相应的历史记录
          */
          //   location = "http://www.baidu.com";
          //   location = "106_JS基础_History_test01.html";
          /* 
            assign()
                用来跳转到其他的页面 作用和直接修改location一样
        */
          //   location.assign("http://www.baidu.com");
          /* 
            reload()
                用于重新加载当前页面 作用和刷新按钮一样
                如果在方法中传递一个true 作为参数 则会强制清空缓存刷新页面
        */
          //   location.reload(true);
          /* 
            replace()
                可以使用一个新的页面替换当前页面 调用完毕也会跳转页面
        */
          location.replace("106_JS基础_History_test01.html");
        };
      };
    </script>
  </head>
  <body>
    <button id="btn">点我一下</button>
    <h1>Location</h1>
    <input type="text" />
    <a href="106_JS基础_History_test01.html">去 History_test01</a>
  </body>
</html>

```

​	

​	

# 127_JS基础_定时器简介

​	

**109_JS基础_定时调用.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      window.onload = function () {
        //获取count
        var count = document.getElementById("count");

        //使count中的内容 自动切换
        /* 
                JS的程序的执行速度是非常非常快的
                    如果希望一段程序 可以每间隔一段时间执行一次 可以使用定时调用
            */
        // for (var i = 0; i < 10000; i++) {
        //   count.innerHTML = i;
        //   alert("hello");
        // }

        /* 
            setInterval()  (翻译：设置间隔)
                定时调用
                可以将一个函数 每隔一段时间执行一次
                参数：
                    1.回调函数 该函数会每隔一段时间被调用一次
                    2.每次调用间隔的时间 单位是毫秒
        */
        var num = 1;
        var timer = setInterval(function () {
          count.innerHTML = num++;

          if (num == 11) {
            //关闭定时器
            clearInterval(timer);
          }

          //因为赋值是num++ 所以先赋值后++ 最多就到10就停止了
        }, 1000);

        console.log(timer); //返回一个number 该定时器的唯一标识（身份证）

        //clearInterval()可以用来关闭一个定时器
        //方法中需要一个定时器的标识作为参数 这样将关闭标识对应的定时器
        // clearInterval(timer);
      };
    </script>
  </head>
  <body>
    <h1 id="count">1</h1>
  </body>
</html>

```

​	

​	

# 128_JS基础_切换图片练习

定时器可以说是慢倍速的for循环

​	

**110_JS基础_切换图片练习.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      window.onload = function () {
        /* 
                使图片可以自动转换
            */

        //获取img标签
        var img1 = document.getElementById("img1");

        //创建一个数组来保存图片的路径
        var imgArr = [
          "img/1.jpg",
          "img/2.jpg",
          "img/3.jpg",
          "img/4.jpg",
          "img/5.jpg",
        ];

        //创建一个变量 用来保存当前图片的索引
        var index = 0;

        //定义一个变量 用来保存定时器的标识 （放在btn01中无法被btn02获取）
        var timer;
        //为btn01绑定一个单击响应函数
        var btn01 = document.getElementById("btn01");
        btn01.onclick = function () {
          /* 
                目前 我们每点击一次按钮 就会开启一个定时器
                （为什么开始按钮点多了停止不了呢因为timer只能关闭最后的一个）
                    点击多次就会开启多个定时器 这就导致图片的切换速度过快
                    并且我们只能关闭最后一次开启的定时器

            */

          //在开启定时器之前 需要将当前元素上的其他定时器关闭
          clearInterval(timer);

          /* 
            开启一个定时器 来自动切换图片
            */
          timer = setInterval(function () {
            //索引自增
            index++;

            //判断索引是否超过最大索引
            //   if (index >= imgArr.length) {
            //     //则将index设置为0
            //     index = 0;
            //   }
            // index = index % imgArr.length;
            index %= imgArr.length;

            //修改img1的src属性
            img1.src = imgArr[index];
          }, 1000);
        };

        //为btn02绑定一个单击响应函数
        var btn02 = document.getElementById("btn02");
        btn02.onclick = function () {
          //点击按钮以后 停止图片的自动切换 关闭定时器
          /* 
            clearInterval()可以接收任意参数
              如果参数是一个有效的定时器的标识 则停止对应的定时器
              如果参数不是一个有效的标识 则什么也不做
          */
          clearInterval(timer);
        };
      };
    </script>
  </head>
  <body>
    <img src="img/1.JPG" alt="" id="img1" />
    <br /><br />
    <button id="btn01">开始</button>
    <button id="btn02">停止</button>
  </body>
</html>

```

​	

​	

# 129_JS基础_修改div移动练习

之前开头不连贯是因为一个函数既要控制方向又要控制速度 现在写成两个（主要还是有防误触的设置，现在用一个定时器来控制移动的时间，覆盖掉防误触的设置）

速度用定时器去控制 方向按键只控制方向

​	

**123和129的div移动对比**

- 123：按下方向键后 立即触发onclick函数立刻执行一次操作 然后等待防误触时长后 按照系统默认的连续按下间隔时长 连续执行onclick函数

- 129：按下方向键后 立即触发onclick函数立刻执行一次操作 然后根据设置的定时器时间间隔 执行函数

​	

**111_JS基础_键盘移动div练习.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: rgb(165, 62, 234);
        position: absolute;
      }
    </style>
    <script>
      //使div可以根据不同的方向键向不同的方向移动
      /* 
        按上键 div向上移
        按下键 div向下移
        按左键 div向左移
        按右键 div向右移

        */

      window.onload = function () {
        //定义一个变量 来表示移动的速度
        var speed = 10;

        // 创建一个变量表示方向
        //通过修改dir来影响移动的方向
        var dir = 0;

        //开启一个定时器 来控制div的移动
        setInterval(function () {
          /* 
                    37 左
                    38 上
                    39 右
                    40 下
                */
          //   console.log(event.keyCode);

          switch (dir) {
            case 37:
              //   alert("向左"); left值减小
              box1.style.left = box1.offsetLeft - speed + "px";
              break;
            case 38:
              //   alert("向上");
              box1.style.top = box1.offsetTop - speed + "px";

              break;
            case 39:
              //   alert("向右");
              box1.style.left = box1.offsetLeft + speed + "px";

              break;
            case 40:
              //   alert("向下");
              box1.style.top = box1.offsetTop + speed + "px";
              break;
          }
        }, 10);

        //document绑定一个按键按下的事件
        document.onkeydown = function (event) {
          event = event || window.event;

          //当用户按了ctrl以后 速度加快
          if (event.ctrlKey) {
            speed = 50;
          } else {
            speed = 10;
          }

          //使dir等于按键的值
          dir = event.keyCode;
        };

        //当按键松开时 div不再移动
        document.onkeyup = function () {
          //设置方向为0
          dir = 0;
        };
      };
    </script>
  </head>
  <body>
    <div id="box1"></div>
  </body>
</html>

```

​	

​	

# 130_JS基础_延时调用

​	

**112_JS基础_延时调用.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script>
      var num = 1;

      //开启一个定时器
      var timer1 = setInterval(function () {
        console.log(num++);
      }, 1000);

      /* 
            延时调用
                延时调用一个函数不马上执行 而是隔一段时间以后在执行 而且只会执行一次

            延时调用和定时调用的区别
                定时调用会执行多次
                而延时调用只会执行一次

            延时调用和定时调用实际上是可以相互代替的 在开发中根据自己需要去选择
        */
      var timer2 = setTimeout(function () {
        console.log(num++);
      }, 1000);

      //   //使用clearTimeout()来关闭一个延时调用
      clearTimeout(timer1);
      //   clearTimeout(timer2);
    </script>
  </head>
  <body></body>
</html>

```

​	

​	

# 131_JS基础_定时器的应用（一）


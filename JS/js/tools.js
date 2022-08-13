/*
    定义一个函数 用来获取指定元素的当前的样式
    参数：
        obj 要获取的样式的元素
        name 要获取的样式名
    */
function getStyle(obj, name) {
  /*
    这里存在一个问题，该方法要怎么修改才能兼容两种浏览器（兼容性处理）

    其实只需要判断有没有getComputedStyle方法就行了 有则调用
    */

  if (window.getComputedStyle) {
    //没加window. 是变量 加了是方法/属性
    //正常浏览器的方式
    // return getComputedStyle(obj, null).name;//不是name 这样写死了 虽然和形参同名 用[]来表示
    return getComputedStyle(obj, null)[name]; //不是name 这样写死了 虽然和形参同名 用[]来表示
  } else {
    //IE8的方式
    return obj.currentStyle[name];
  }

  //也可以用三元运算符
  // return window.getComputedStyle
  //   ? getComputedStyle(obj, null)[name]
  //   : obj.currentStyle[name];

  //这么用会优先使用currentStyle 跟上面的没区别 只是我们希望优先使用getComputedStyle
  // if(obj.currentStyle){
  //     return obj.currentStyle[name];
  // }else{
  //     return getComputedStyle(obj, null)[name];
  // }
}

//定义一个变量 用来保存定时器的标识
/* 
    目前我们的定时器的标识由全局变量timer保存
        所有的执行正在执行的定时器都在这个变量中保存
    */
// var timer;

//尝试创建一个可以执行简单动画的函数
/* 
    参数
        obj 要执行动画的对象
        attr 要执行动画的样式 比如：left top width height
        target 执行动画的目标位置
        speed 移动的速度（正数向右移动 负数向左移动）
        callback 回调函数 这个函数将会在动画执行完毕以后执行
    */
function move(obj, attr, target, speed, callback) {
  //关闭上一个定时器 禁止在未达到终点之前启动多个定时器
  clearInterval(obj.timer);

  //获取元素目前的位置
  var current = parseInt(getStyle(obj, attr));

  //判断速度的正负值 这一步应由函数内部判断
  //  因为到实际应用中我们往往不清楚obj的位置跟我们target位置的关系
  //    统一传入正数的speed 再让函数内部去判断正负号

  //如果从0向800移动 则speed为正
  //如果从800向0移动 则speed为负
  if (current > target) {
    //此时速度应为负值
    speed = -speed;
  }

  //开启一个定时器 用来执行动画效果
  //向执行动画的对象中添加一个timer属性 用来保存它自己的定时器的标识
  obj.timer = setInterval(function () {
    //获取box1的原来的left值
    var oldValue = parseInt(getStyle(obj, attr)); //getStyle返回的值带px 我们只需要整数的部分方便下面加减
    //而且用自定义的getStyle()的好处是方向不会写死 可以任意改变哪一个方向上的值

    //在旧值的基础上增加
    var newValue = oldValue + speed;

    //判断newValue是否大于800
    //从800向0移动
    //向左移动时 需要判断newValue是否小于target
    //向右移动时 需要判断newValue是否大于target
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target;
    }

    //将新值设置给box1
    obj.style[attr] = newValue + "px";
    /* 
        传入的如果是一个变量的话 要用[] 来接收
        而不能使用 . 不然会误以为是自定义对象属性
        */

    //当元素移动到0px时 使其停止执行动画
    if (newValue === target) {
      //达到目标 关闭定时器
      clearInterval(obj.timer);
      //动画执行完毕 调用回调函数
      callback && callback();
      //有传回调函数你就执行 没有就不执行
    }
  }, 22);
}

//定义一个函数u用来向一个元素中添加指定的class属性值
/*
    参数：
        obj 要添加class属性的元素
        cn 要添加的class值
*/
function addClass(obj, cn) {
  //检查obj中是否含有cn
  if (!hasClass(obj, cn)) {
    obj.className += " " + cn;
  }

  /*
    单纯写 obj.className += " " + cn; 我们会发现一个问题
    id为box的div标签的内联样式中的class属性值会不断添加b2字符串 当我们不断点击添加时
        虽然显示效果没影响 但这样的代码会很奇怪 我们需要封装了函数
        来对添加时判断所要添加的标签是否已经含有了所要添加的class属性值
            判断字符串是否包含其内容 我们可以用正则表达式来判断
*/
}

/*
    判断一个元素中是否含有指定的class属性值
        如果有该class 则返回true 没有则返回false
*/
function hasClass(obj, cn) {
  //判断obj中的class属性有没有包含 cn样式

  //创建一个正则表达式
  // var reg1 = /\bb2\b/;
  //但这样正则表达式的内容就写死了无法传cn进去
  // 用构造函数来解决该问题

  var reg = new RegExp("\\b" + cn + "\\b");

  // var reg = new RegExp("\\b" + cn + "\\b");
  // alert(reg);

  // var reg1 = /\bb2\b/;
  // alert(reg1);

  // var reg2 = new RegExp("\b" + cn + "\b");
  // alert(reg2);

  // var reg3 = new RegExp("\b");
  // alert(reg3);
  return reg.test(obj.className);
}

/* 
删除一个元素中的指定的class属性
*/
function removeClass(obj, cn) {
  //创建一个正则表达式
  var reg = new RegExp("\\b" + cn + "\\b");

  //删除class
  obj.className = obj.className.replace(reg, "");
  //replace() 用空串"" 来替换reg
}

/* 
    toggleClass可以用来切换一个类
        如果元素中具有该类 则删除
        如果元素中没有该类 则添加
    */
function toggleClass(obj, cn) {
  //判断obj中是否含有cn
  if (hasClass(obj, cn)) {
    //有 则删除
    removeClass(obj, cn);
  } else {
    //没有 则添加
    addClass(obj, cn);
  }
}

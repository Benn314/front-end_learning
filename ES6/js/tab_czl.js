var that;
/* this执行问题尤其需要注意
    实在不行用全局变量that代替 */
class Tab {
  constructor(id) {
    // 这里的this指向传入的实参大盒子
    that = this;
    // 获取大盒子中的元素
    this.main = document.querySelector(id);
    // 获取class为tabadd的+号按钮
    this.add = this.main.querySelector(".tabadd");
    // li的父元素
    this.ul = this.main.querySelector(".fisrstnav ul:first-child");
    // section的父元素
    this.fsection = this.main.querySelector(".tabscon");
    // 构造函数被调用就自动为元素绑定点击事件
    this.init();
  }
  init() {
    this.updateNode();
    //init 初始化操作让相关的元素绑定事件
    this.add.onclick = this.addTab;
    // alert(this.lis.length);
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  // 获取动态更新元素
  updateNode() {
    // 获取li
    this.lis = this.main.querySelectorAll("li");
    // 获取盒子中的内容
    this.sections = this.main.querySelectorAll("section");
    // 获取删除按钮
    this.remove = this.main.querySelectorAll(".X");
    // 获取所有文本框span
    this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
  }
  // 1.切换功能
  toggleTab() {
    // alert(1);
    that.clearClass();
    // console.log(this.index);
    this.className = "liactive"; //【拼写错误】写成name 没有该属性 应该是className
    that.sections[this.index].className = "conative";
  }
  // 清除所有li和section的类
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }
  //2.添加功能
  addTab() {
    that.clearClass();
    // 生成随机数
    var random = Math.random();
    // (1)创建li元素和section元素
    var li =
      '<li class="liactive"><span>新选项</span><span class="X"> X</span></li>';
    var section =
      '<section class="conactive">新建选项卡内容' + random + "</section>";
    // (2)把两个元素追加到对应的父元素里面
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", section);
    that.init();
    // that.updateNode();
    // alert(li);
  }
  //3.删除功能
  /* 思路: 1.x没索引号,但是它的父亲li有索引号
             2.点击x号可以删除掉这个索引号对应的li和section */
  removeTab(e) {
    // 阻止冒泡,防止li切换点击事件的产生
    e.stopPropagation();
    var index = this.parentNode.index;
    // alert(index);

    // 新增按钮无法实现删除功能
    // 根据索引号删除对应的li和section remove()方法可以删除指定的元素
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();

    // 当删除的不是选中状态的li时,原来选中状态li保持不变
    if (document.querySelector(".liactive")) return;
    // 删除选中状态的li时,让它的前一个li处于选定状态
    index--;
    // 手动调用点击事件,不需要鼠标触发
    that.lis[index] && that.lis[index].click();
  }
  //4.修改功能
  editTab() {
    // 将起始文字赋值给str
    var str = this.innerHTML;
    /* 核心思路:双击文字时,在里面生成文本框,当失去焦点或者按下回车键时,把文本框的值给原先的元素 */
    /* 双击文字,会默认选定文字,此时需要双击禁止选定文字 */
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.section.empty();
    // alert(1);
    this.innerHTML = '<input type="text" />';
    // input是span的第一个孩子
    var input = this.children[0];
    input.value = str; //str的值作为文本框的默认值
    input.select(); //文本框里面的文字处于选定状态
    // 当我们离开文本框时把文本框里面的值给span,onblur 事件会在对象失去焦点时发生
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };

    // 按下回车也可以把文本框的值给span
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        // 手动调用失去焦点事件  不需要鼠标离开操作
        this.blur();
      }
    };
  }
}
new Tab("#tab");

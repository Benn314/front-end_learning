**引入jquery.js文件**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQuery的引入方式</title>
</head>
<body>
    <!--网址引入-->
<!--    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.4.1/jquery.js"></script>-->

    <!--本地引入-->
    <script src="js/jquery-3.4.1.js"></script>

    <script>
        /*测试JQuery是否导入*/
        $(function () {
            alert(123123);
        })
    </script>
</body>
</html>
```


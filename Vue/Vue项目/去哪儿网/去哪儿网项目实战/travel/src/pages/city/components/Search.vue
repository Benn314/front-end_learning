<template>
    <div class="search">
        <!-- placeholder 占位符 -->
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem // 左右两边留点空隙 美化一点
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
</style>

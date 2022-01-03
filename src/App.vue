<template>
<a-config-provider :autoInsertSpaceInButton="false" :locale="locale">
    <div id="app">
        <router-view />
    </div>
</a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import './assets/js/flexible'

export default {
    data() {
        return {
            locale: zhCN,
        }
    },
    mounted() {
        let that = this;
        window.onresize = function () {
            that.$store.state.screenWidth = document.documentElement.clientWidth; // 窗口宽度
            that.$store.state.screenHeight = document.documentElement.clientHeight; // 窗口高度
        }
        console.log(that.$store.state.screenWidth)

    }
}
</script>

<style lang="scss">
@import "./assets/css/moblie";
</style>

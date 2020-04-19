<template>
    <div class="app">
        <top-nav></top-nav>
        <router-view/>
        <wk-footer></wk-footer>
    </div>
</template>

<script>
    import topNav from "@components/top-nav/top-nav"
    import wkFooter from "@components/wk-footer/wk-footer"
    export default {
        name: "app",
        components:{topNav,wkFooter}
    }
</script>

<style lang="scss">
@import "./asset/style/base.css";
body{
    background: #f5f7fa;
}
</style>
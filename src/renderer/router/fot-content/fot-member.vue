<template>
    <div class="fot-member">
        <fotBanner></fotBanner>
        <div class="main">
            <div class="title1">会员权益</div>
            <div class="text">
                <div class="title2">注册会员</div>
                <div class="title3">
                    <p>申请条件：任何网友都可以免费注册成为英盛网的会员。</p>
                </div>

                <div class="title2">会员独享待遇</div>
                <div class="title3">
                    <p>1、可享受会员价和独享尊贵优惠。</p>
                    <p>2、可免费观看网站免费视频。</p>
                    <p>3、网站会定期推出部分限时免费、优惠视频供会员学习。</p>
                    <p>4、会员遇到任何问题，可拨打客服热线：400-666-4343得以解决。</p>
                </div>
                <div class="title2">VIP会员申请条件</div>
                <div class="title3">
                    <p>网站根据会员的需求，分为单独购买视频和年卡会员。只要购买其中任何一项服务，即可自动升级为VIP会员。</p>
                </div>
                <div class="title2">VIP会员申请条件</div>

                <div class="title3">
                    <p>1、注册会员享受的所有待遇，VIP会员均可享受。</p>
                    <p>2、VIP会员可以在规定的时间内享受与购买服务相应的视屏的无限制次数播放。</p>
                    <p>3、享受网站不定期举行的VIP会员活动。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fotBanner from '@router/fot-content/fotBanner'
export default {
    name: 'fot-member',
    components: {
        fotBanner,
    },
}
</script>

<style lang='scss' scoped>
.fot-member {
    background-color: #fff;
    margin-bottom: 50px;
    padding-bottom: 300px;
}
.main {
    width: 70%;
    margin: 0 auto;
}
.title1 {
    margin-bottom: 10px;
    font-size: 42px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(65, 65, 65, 1);
    text-align: center;
    padding-top: 94px;
    /* line-height:5px; */
}
.title2 {
    font-size: 25px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(65, 65, 65, 1);
    line-height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.title3 p {
    font-size: 25px;
    font-family: Microsoft YaHei;
    font-weight: Regular;
    color: rgba(65, 65, 65, 1);
    line-height: 37.5px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
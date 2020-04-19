<template>
    <div class="fot-problem">
        <fotBanner></fotBanner>
        <div class="main">
            <div class="title1">常见问题</div>
            <div class="text">
                <div class="title2">如何注册会员？</div>
                <div class="title3">
                    <p>
进入注册页面，填写相关的信息即可。
                    </p>
                    </div>
                <div class="title2">如何找回密码？</div>
                <div class="title3">
                    <p>进入找回密码页面，填写用户名、邮箱即可取回密码。</p>
                </div>
                <div class="title2">我可以单独购买某个视频吗？</div>
                <div class="title3">
                    <p>可以的，每个视频都有单独的购买价格，您可以单独购买某个或部分视频。但是，我们推荐您购买月卡/年卡服务，这样您就能在期限内观看全部视频了。</p>
                </div>
                <div class="title2">视频可以下载吗？</div>
                <div class="title3">
                    <p>不可，网站上的视频均不可下载或者录制，禁止通过任何非法手段获取视频进行商业行为。</p>
                </div>
                <div class="title2">如何修改资料、密码？</div>
                <div class="title3">
                    <p>登陆后进入您的个人中心（点击网页右上角您的用户名）在左侧栏进入您想修改的项目。</p>
                </div>
                <div class="title2">如何计算会员有效期？</div>
                <div class="title3">
                    <p>单独购买视频课程：</p>
                    <p>单独购买单个视频以购买时视频注明的时长为准，在规定时间内您可反复观看。</p>
                    <p>会员有效期：</p>
                    <p>月年/卡购买自购买日期算起，一月/一年内有效。</p>
                </div>
                <div class="title2">购买后是否可以立即观看视频？</div>
                <div class="title3">
                    <p>是的，只要您购买成功，即可开始观看相关的视频。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fotBanner from '@router/fot-content/fotBanner'
export default {
    name: 'fot-problem',
    components: {
        fotBanner,
    },
}
</script>

<style lang="scss" scoped>
.fot-problem{
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
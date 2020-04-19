<template>
    <div class="fot-watch">
        <fotBanner></fotBanner>
        <div class="main">
            <div class="title1">如何观看</div>
            <div class="text">
                <div class="title2">免费视频：</div>
                <div class="title3">
                    <p>免费视频均可直接进入相应播放页面进行观看。</p>
                    </div>
                <div class="title2">会员限免视频：</div>
                <div class="title3">
                    <p>网站定期会推出部分限时会员限免视频，观看此部分视频，要先注册成为英盛网的会员。如果您还没有注册会员，请先在右上方点击注册按钮；如果您已有账号，登陆账号即可。</p>
                </div>
                <div class="title2">收费视频：</div>
                <div class="title3">
                    <p>
                        注册会员后，根据自己的需求，进行单个或部分视频的购买，或者购买月卡/年卡即可在规定的期限内不限制次数观看。
                        为了方便您随时随地观看视频，您也可以下载我们的手机客户端在手机观看。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fotBanner from '@router/fot-content/fotBanner'
export default {
    name: 'fot-watch',
    components: {
        fotBanner,
    },
}
</script>

<style lang='scss' scoped>
.fot-watch{
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
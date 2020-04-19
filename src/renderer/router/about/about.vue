<template>
    <div class="about">
        <!-- 关于我们 -->
        <div class="about-top">
            <div class="about-top-title">关于我们</div>
            <div class="about-top-items">
                <div class="title1">关于我们</div>
                <div class="blueline"></div>
                <div class="text">
                    <p>犀牛股权是国内首批最专业的股权激励与股权管理云计算平台，为企业提供股权问题诊断、激励方案设计、方案签约落地、考核行权发放、可视化股权架构、规范化股权变更、股权价值预测分析、行业大数据对比分析、财税法知识透析等一站式股权智能解决方案。</p>
                    <br />
                    <p>犀牛股权的投资方包括IDG资本、启赋资本、清科集团、东方富海、华映资本等。曾首批入选黑马伙伴计划，长期高居企业级服务人气榜Top10。</p>
                    <br />
                    <p>犀牛股权的团队有来自全球500强企业的技术负责人与产品经理、专业的管理咨询顾问、知名律所的律师团队、人力资本咨询背景股权架构师，只为提供更专业、更具价值的专业服务和专业平台。</p>
                    <br />
                    <p>犀牛股权已经为2000多家企业提供了全流程股权激励解决方案，典型客户包括：优信二手车、小蓝单车、OK学车、蘑菇租房、企查查、简书、公司宝、农分期、拍片网、插座学院等。</p>
                    <br />
                </div>
            </div>
        </div>
        <!-- 团队介绍 -->
        <div class="about-team">
            <div class="about-team-wp">
                <div class="about-team-title">
                    <p class="title1">团队介绍</p>
                    <div class="blueline"></div>
                </div>
                <div class="about-team-items">
                    <div class="item-wp" v-for="(item ,index) in teamlists" :key="index">
                        <img :src="item.img" alt="人像" />
                        <p class="title2">{{item.title}}</p>
                        <p>{{item.text}}</p>
                        <span class="left">{{item.date}}</span>
                        <span class="right">{{item.who}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 联系我们 -->
        <div class="about-contact">
            <div class="about-contact-wp">
                <div class="about-contact-title">
                    <p class="title1">联系我们</p>
                    <div class="blueline"></div>
                </div>
                <div class="about-contact-items">
                    <!-- 循环三次 -->
                    <div class="about-contact-item" v-for="(item,index) in aboutItem" :key='index'>
                        <div class="item-title" >
                            <p>{{item.title}}</p>
                            <div class="blackline"></div>
                        </div>
                        <div class="about-contact-text ">
                            <p>{{item.phone}}<br /><br />{{item.tel}}<br /> <br />{{item.time}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 下方地图导航 -->
        <el-row>
            <el-col :span="24">
                <div class="about-map clearfix">
                    <img :src="mapurl" alt />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'about',
    data() {
        return {
            mapurl: require('../../asset/images/aboutmap.png'),

            teamlists: [
                {
                    img: require('../../asset/images/aboutteam.png'),
                    title: '股权比例对控制权的区别！',
                    text: '绝对控制权67%，相当于100%的权力，修改公司章程以...',
                    date: '2019年2月14日',
                    who: '今日头条',
                },
                {
                    img: require('../../asset/images/aboutteam.png'),
                    title: '股权比例对控制权的区别！',
                    text: '绝对控制权67%，相当于100%的权力，修改公司章程以...',
                    date: '2019年2月14日',
                    who: '今日头条',
                },
                {
                    img: require('../../asset/images/aboutteam.png'),
                    title: '股权比例对控制权的区别！',
                    text: '绝对控制权67%，相当于100%的权力，修改公司章程以...',
                    date: '2019年2月14日',
                    who: '今日头条',
                },
            ],

            aboutItem:[
                {
                title:'产品咨询',
                phone:'手机：186-1708-3863',
                tel:'电话：0755-86727881',
                time:'时间：10:00-18:00（工作日)'           
                },
                  {
                title:'技术支持',
                phone:'手机：186-1708-3863',
                tel:'电话：0755-86727881',
                time:'时间：10:00-18:00（工作日)'           
                },
                  {
                title:'商务合作',
                phone:'手机：186-1708-3863',
                tel:'电话：0755-86727881',
                time:'时间：10:00-18:00（工作日)'           
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
body {
    margin: 0;
    padding: 0;
    
}
.left {
    float: left;
}
.right {
    float: right;
}
.center {
    text-align: center;
}

.about{
    background-color: #fff;
}
.about-top {
    width: 100%;
    margin-bottom: 90px;
}
.about-top-title {
    height: 500px;
    
    font-size: 72px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 500px;
    text-align: center;
   background: url(https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_banner.jpg) no-repeat;
    margin: 0 auto;
    vertical-align: center;
}
.about-top-items {
    margin-top: 138px;
}
.title1 {
    /* width:124px; */
    height: 30px;
    font-size: 32px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    text-align: center;
}

.blueline {
    width: 60px;
    height: 1px;
    margin: 20px auto;
    text-align: center;
    border-top: solid rgba(51, 153, 255, 1) 6px;
}

.text {
    width: 70%;
    text-align: center;
    margin: 0 auto;
}
.text p {
    text-align: left;
    font-size: 14px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
}
/* team */
.about-team {
    width: 100%;
    background: rgba(241, 244, 248, 1);
}
.about-team-title {
    padding-top: 60px;
}
.about-team-items {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-top: 80px;
    border-radius: 8px;
}
.item-wp {
    width: 340px;
    height: 360px;
    padding-bottom: 80px;
}
.item-wp img {
    width: 340px;
    height: 262px;
    border-radius: 8px;
}
.item-wp .title2 {
    font-size: 16px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
}
.item-wp p {
    font-size: 12px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
}
.item-wp span {
    font-size: 12px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
}

/* 联系我们 */
.about-contact {
    width: 100%;
    background: rgba(255, 255, 255, 1);
     margin-bottom: 100px;
}
.about-contact-wp {
    width: 70%;
    padding-top: 80px;
    margin: 0 auto;
}
.blackline {
    border-top: solid #000 3px;
    width: 40px;
    margin-top: 10px;
}

.about-contact-title {
    padding-top: 60px;
}
.about-contact-title .title1 {
    text-align: center;
}
/* 联系我们-下方三个div */
.about-contact-items {
    margin-top: 50px;
      height: 300px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-content: center;
    border: 1px solid rgba(191, 191, 191, 1);
    box-shadow: 0px 11px 24px 0px rgba(217, 217, 217, 0.19);

}
// 声明最后一个div的下面的.about-contact-text 的boder 为none 
.about-contact-items>.about-contact-item:last-child>.about-contact-text{
    border: none;
}
.about-contact-item {
    width: 25%; 
}
.about-contact-text {
    padding-top: 40px;
    text-align: left;
   border-right:2px solid   rgba(234,234,234,1);    
}

.about-contact-text p {
    font-size: 14px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
    /* margin-bottom:16px ; */
     
}

.about-contact-item {
    padding-top: 55px;
    padding-bottom: 20px;
    font-size: 24px;
    font-family: inpinheiti;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
}
/* 下方地图导航 */
.clearfix:after {
    display: block;
    clear: both;
    content: '';
}
.about-map{
    margin: 0;
    padding: 0;
    /* margin-bottom: 50px; */
}
</style>
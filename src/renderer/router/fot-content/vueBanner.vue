<template>
<div class="vuebanner">
  <div class="banner-title1" :style='{backgroundImage:bgcurl}'>{{bannerTitle1}}</div>
  <div class="banner-title2" >{{bannerTitle2}}</div>
</div>
</template>

<script>
export default {
data(){
    return{
        bannerTitle1:this.title1,
        bannerTitle2:this.title2,
        bgcurl:this.imgUrl,
    }
},
props:['title1','title2','imgUrl']
}
</script>

<style lang="scss" scoped>
.vuebanner{
background: url(https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_banner.jpg) no-repeat;
margin: 0 auto;
text-align: center;
vertical-align: center;
height: 500px;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
}
.banner-title1 {   
     font-size: 72px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    margin-bottom: 60px;
    color: rgba(255, 255, 255, 1);
    // line-height: 500px;  
}
.banner-title2 {
font-size:52px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
}
</style>
<template>
    <div :class="'card-carousel '+styleClass" :style="'background-color: '+carouselInfo.backColor">
        <div class="title-wrap">
            <h3 class="title">{{carouselInfo.title}}</h3>
            <p class="sub-title">{{carouselInfo.subTitle}}</p>
        </div>
        <div class="carousel-section">
            <carousel :duration="3000">
                <el-carousel-item v-for="item in carouselInfo.cards" >
                    <div class="card-info">
                        <router-link :to="{name:'courseDetail',query:{courseId:item.id}}">
                            <div class="card-desc">
                                <h3 class="desc-title">{{item.name}}</h3>
                                <p class="desc-text">{{item.info}}</p>
                            </div>
                            <div class="img-box">
                                <img :src="item.cover"/>
                            </div>
                        </router-link>
                    </div>
                </el-carousel-item>
            </carousel>
        </div>
    </div>
</template>

<script>
    import carousel from "../carousel/carousel"
    export default {
        name: "card-carousel",
        components:{carousel},
        props:{
            title:'小学教师资格证',
            subTitle:'xiaoxuejiaoshizigezheng',
            carouselInfo:{},
            styleClass:''
        }
    }
</script>

<style lang="scss">
.card-carousel{
    background: #FF9684;
    width: 224px;
    height: 412px;
    margin-right: 20px;
    .title-wrap{
        padding: 24px;
        color: #fff;
        .title{
            font-size: 24px;
            height: 24px;
            line-height: 24px;
            font-weight: normal;
            padding-bottom: 15px;
            position: relative;
            margin-bottom: 15px;
            &:after{
                content: '';
                position: absolute;
                background: #fff;
                width: 60px;
                height: 2px;
                bottom: 0;
                left: 0;
            }
        }
        .sub-title{
            text-transform: Uppercase;
            font-size:9pt
        }
    }
    .card-info{
        width: 204px;
        height: 293px;
        overflow: hidden;
        margin:0 auto;
        .card-desc{
            margin: 0 10px;
            background: #fff;
            padding: 35px 15px 0;
            border-radius: 5px 5px 0 0;
            .desc-title{
                font-size: 14px;
                font-weight: normal;
                text-align: center;
                margin-bottom: 20px;
                line-height: 20px;
                letter-spacing: 1px;
                height: 40px;
                overflow: hidden;
                color: #FF9684;
            }
            .desc-text{
                text-align: center;
                color: #888;
                letter-spacing: 1px;
                font-size: 12px;
                height: 12px;
                line-height: 12px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .img-box{
            padding: 20px 15px 30px;
            background: #fff;
            margin: 0 10px;
            border-radius: 0 0 5px 5px;
            height:86px;
            overflow: hidden;
            img{
                width: 100%;
                display: block;
            }
        }
    }

    .carousel-section{
        position: relative;
    }
    .carousel-section:after{
        content: '';
        height: 192px;
        background: #fff;
        opacity: 0.3;
        border-radius: 5px;
        position: absolute;
        top: 27px;
        width: 204px;
        left: 50%;
        margin-left: -102px;
    }

    .el-carousel__indicators--horizontal{
        bottom:15px;
    }
    .el-carousel__indicator{
        .el-carousel__button{
            padding:0;
            width:6px;
            height:6px;
            border-radius: 50%;
        }
    }
}
</style>
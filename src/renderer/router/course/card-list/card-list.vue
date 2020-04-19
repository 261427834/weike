<template>
    <div class="card-list clearfix">
        <div class="card-wrap" v-for="item in cardList">
            <card-item
                    :router="{name:'courseDetail',query:{courseId:item.id}}"
                    :title="item.name"
                    :content="item.info"
                    styleClass="card-style"
            >
                <div slot="img">
                    <div class="img-box">
                        <img class="cover" :src="item.cover">
                        <div class="demand">点播</div>
                    </div>
                </div>
                <div slot="btm" class="btm">
                    <div class="hour">共 {{item.hour}} 课时</div>
                    <div class="card-more clearfix">
                        <span class="member">{{item.member}}人学习</span>
                        <span class="fee">{{item.free == 0 ? '免费' : item.originPrice+'.00'}}</span>
                    </div>
                </div>
            </card-item>
        </div>
    </div>
</template>

<script>
    import cardItem from '@components/card-item/card-item'
    export default {
        name: "card-list",
        components:{cardItem},
        props:{
            cardList: Array
        }
    }
</script>

<style lang="scss">
.card-list{
    width:915px;
    .card-wrap{
        float: left;
        width: 33.33%;
    }
    .card-style{
        background: #fff;
        margin: 10px 30px 10px 0;
        position: relative;
        z-index: 50;
        border-radius: 5px;
        width:auto;
        height:auto;
        text-align: left;
        padding-bottom: 90px;
        .img-box{
            position: relative;
            .demand{
                position: absolute;
                padding: 3px 12px;
                line-height: 18px;
                bottom: 25px;
                left: 8px;
                background: rgba(0, 0, 0, 0.5);
                color: #fff;
                border-radius: 20px;
                font-size: 9pt;
            }
            .cover{
                height:154px;
            }
        }
        .desc{
            padding: 15px 15px 55px 15px;
        }
        .btm{
            background: white;
            padding: 10px 15px 15px 15px;
            .hour{
                line-height: 25px;
                font-size: 14px;
            }
        }
        &:hover{
            transform: translateY(0);
            .desc .content{
                height: 50px;
            }
        }
    }
}
</style>
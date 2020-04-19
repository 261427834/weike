<template>
    <div :class="'card-item '+styleClass" >
        <router-link :to="router">
            <slot name="img">
                <div class="img-box">
                    <img class="cover" :src="img">
                </div>
            </slot>
            <div class="desc">
                <div class="title">{{title}}</div>
                <div class="content">{{content}}</div>
            </div>
            <slot name="btm">
                <div class="btm clearfix">
                    <span class="member">{{member}}人学习</span>
                    <span class="fee">{{fee}}</span>
                </div>
            </slot>
            <div class="tag" v-if="tag">{{tag}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "card-item",
        props:{
            router:{},
            img:'',
            title:'',
            content:'',
            member:'',
            fee:'',
            tag:'',
            styleClass:{
                type:String,
                default:''
            }
        }
    }
</script>

<style lang="scss">
.card-item{
    transition: all 0.3s ease;
    width:224px;
    height:196px;
    position: relative;
    &:hover{
        transform: translateY(-6px);
        box-shadow: 0 26px 40px -24px rgba(0, 0, 0, 0.1);
        .desc .content{
            height: 44px;
        }
    }
    .cover{
        height:125px;
        overflow: hidden;
        border-radius: 5px 5px 0 0;
        width:100%;
    }
    .desc{
        padding: 8px 8px 30px 8px;
        box-sizing: border-box;
        position: absolute;
        left:0;
        bottom:0;
        width: 100%;
        background: white;
        border-radius: 0 0 5px 5px;
        .title{
            width: 100%;
            margin-bottom: 7px;
            font-size: 16px;
            font-weight: normal;
            height: 21px;
            line-height: 21px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color:rgb(51, 51, 51);
            &:hover{
                color:#3c81f9;
            }
        }
        .content{
            width: 100%;
            line-height: 22px;
            font-size: 14px;
            color: #888;
            height: 0;
            overflow: hidden;
            margin: 7px 0;
            transition: all ease 0.3s;
            /*white-space: nowrap;*/
            /*text-overflow: ellipsis*/
        }
    }
    .btm{
        font-size: 14px;
        color: #777;
        margin-top: 7px;
        border-radius: 0 0 5px 5px;
        position: absolute;
        left:0;
        bottom:0;
        width: 100%;
        padding:0 8px 8px 8px;
        box-sizing: border-box;
        .member{
            font-size: 14px;
            color: #777;
        }
        .fee{
            float: right;
            color: #3ab57f;
            font-size: 16px;
        }
    }
    .tag{
        position: absolute;
        z-index: 100;
        top: -14px;
        right: -14px;
        color: #fff;
        padding: 3px 8px;
        border-radius: 20px;
        border: 2px solid #fff;
        font-size: 13px;
        background: #d375e6;
    }
    a{
        display: block;
    }
}
</style>
<template>
    <div class="plane">
        <div class="plane-title" :class="{'active':item.show}">{{item.name}}</div>
        <div class="plane-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab-pane",
        props:{
            item:{
                type:Object
            }
        },
    }
</script>

<style lang="scss">
.plane{
    width: 50%;
    float: left;
    &:hover{
        .plane-title:after{
            display: block;
        }
    }
    .plane-title{
        position: relative;
        line-height: 54px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        &.active:after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 80px;
            left: 50%;
            margin-left: -40px;
            height: 1px;
            background: #488bff;
        }
    }
    .plane-content{
        position: absolute;
        left:0;
        top:60px;
        padding: 0 10px;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
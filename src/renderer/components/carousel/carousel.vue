<template>
    <div class="carousel">
        <el-carousel :interval="duration" trigger="click">
            <slot>
                <el-carousel-item v-for="item in imgs" >
                    <div class="img-wrap">
                        <router-link :to="item.name">
                             <img :src="item.cover"/>
                        </router-link>
                    </div>
                </el-carousel-item>
            </slot>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "carousel",
        props:{
            duration:{
                type:Number,
                default:5000
            },
            imgs:{
                type: Array
            },
        },
    }
</script>

<style lang="scss">
.carousel{
    width:100%;
    .img-wrap{
        width: 100%;
        overflow: hidden;
        img{
            display: block;
            height:100%;
            position: absolute;
            left:50%;
            top:0;
            transform: translateX(-50%);
        }
    }
}
</style>
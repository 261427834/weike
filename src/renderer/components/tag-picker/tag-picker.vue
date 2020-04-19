<template>
    <div class="tag-picker">
        <div class="tag-list clearfix">
            <div class="tag-name">{{list.name}} :</div>
            <div class="list-wrap clearfix">
                <span
                    v-for="(item,index) in list.tags"
                    :class="{'active':item.picked}"
                    @click="pick(item)"
                    :key='index'
                >
                     {{item.name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tag-picker",
        props:{
            list:{
                type:Object
            }
        },
        methods:{
            pick(item){
                this.list.tags.forEach(x=>{
                    x.picked = false
                })
                item.picked = true;
                this.$emit('pick',{type: this.list.type, item})
            }
        }
    }
</script>

<style lang="scss">
.tag-picker{
    .tag-name{
        float:left;
        width: 100px;
        font-size: 14px;
        line-height: 34px;
        position: relative;
        top:2px;
        color: #333;
        text-align: center;
    }
    .list-wrap{
        float:left;
        span{
            float:left;
            border-radius: 3px;
            margin: 5px 5px 0px 0;
            font-size: 14px;
            color: #828282;
            line-height: 30px;
            padding: 0 12px;
            text-indent: 0;
            cursor: pointer;
            &.active,&:hover{
                color: #fff;
                background: #3c81f9;
            }
        }
    }

}
</style>
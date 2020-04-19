<template>
    <div class="card-tab">
        <div class="theme-wrap clearfix">
            <tab-pane v-for = "item in list" :item="item" @mouseenter.native = "change(item)">
                <ul class="con" v-show="item.show">
                    <li v-for="subItem in item.content">
                        <div class="li-title">
                            <router-link :to="{name:'courseDetail',query:{courseId:subItem.id}}">{{subItem.name}}</router-link>
                        </div>
                        <div class="li-con clearfix">
                            <div class="li-img">
                                <img :src="subItem.cover"/>
                            </div>
                            <div class="li-fee">
                                <div class="fee">{{subItem.free === 0 ? '免费' : subItem.currentPrice +'.00'}}</div>
                                <div class="rmb">{{subItem.originPrice}}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </tab-pane>
        </div>
    </div>
</template>

<script>
    import tabPane from '@components/tab-pane/tab-pane'
    export default {
        name: "card-tab",
        props:{
            tabInfo:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
            this.initData();
        },
        data(){
            return {
                list:[]
            }
        },
        components:{
            tabPane
        },
        methods:{
            initData(){
                if(this.tabInfo){
                    this.list = this.tabInfo.map((item,index)=>{
                        if(!index){
                            this.$set(item,'show',true)
                        }else{
                            this.$set(item,'show',false)
                        }
                        return item
                    })
                }
            },
            change(item){
                this.list.forEach(item=>{
                    item.show=false
                })
                item.show = true
            }
        }
    }
</script>

<style lang="scss">
.card-tab{
    width: 224px;
    background: #fff;
    height: 412px;
    padding: 0 10px;
    box-sizing: border-box;
    float:right;
    position: relative;
    .theme-wrap{
        border-bottom: 1px solid #e6e9ed;
        box-sizing: border-box;
        height: 54px;
        .con{
            margin-top: 20px;
            li{
                padding-bottom: 20px;
                padding-left: 18px;
                position: relative;
                &:hover{
                    .li-con{
                        display: block;
                    }
                }
                &:before{
                    content: '';
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    background: #e6e9ed;
                    border-radius: 5px;
                    left: 0;
                    top: 4px;
                }
                .li-title{
                    font-weight: normal;
                    font-size: 14px;
                    height: 14px;
                    line-height: 14px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    a{
                        color:#333;
                        &:hover{
                            color:#3c81f9;
                        }
                    }
                }
                .li-con{
                    display: none;
                    padding-top: 14px;
                    .li-img{
                        width: 80px;
                        height: 45px;
                        overflow: hidden;
                        float: left;
                        border-radius: 5px;
                        img{
                            width:100%;
                            display: block;
                        }
                    }
                    .li-fee{
                        width: 96px;
                        float: right;
                        .fee{
                            font-size: 14px;
                            color: #f5891e;
                            margin-bottom: 2px;
                        }
                        .rmb{
                            font-size: 12px;
                            text-decoration: line-through;
                            color: #bbb;
                        }
                    }
                }
            }
        }
    }
}
</style>
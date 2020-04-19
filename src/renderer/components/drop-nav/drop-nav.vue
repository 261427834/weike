<template>
    <div class="drop-nav">
        <ul class="clearfix">
            <li v-for="item in list">
                <router-link :to="item.router">{{item.name}}</router-link>
                <i class="arrows-icon" v-if="item.children && item.children.length"></i>
                <div class="drop-list" v-if="item.children && item.children.length">
                    <div v-for="subItem in item.children">
                        <router-link :to="subItem.router">{{subItem.name}}</router-link>
                    </div>
                    <i class="arrows-icon-fill"></i>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import list from './data'
    export default {
        name: "drop-nav",
        data(){
            return {
                list:list
            }
        }
    }
</script>

<style lang="scss">
.drop-nav{
    li{
        float: left;
        height:50px;
        line-height: 50px;
        position: relative;
        width: 119px;
        &:hover{
            .arrows-icon{
                transform: rotate(0);
            }
            .drop-list{
                display: block;
            }
        }
        a{
            /*padding:8px 16px;*/
            width: 120px;
            display: block;
            text-align: center;
            color:#333;
            font-size:16px;
            &:hover{
                color:#3c81f9
            }
        }
        .arrows-icon{
            width:20px;
            height:20px;
            position: absolute;
            right:2px;
            top:14px;
            background: url('./asset/arrow-up-s-line.svg') center / 100% no-repeat;
            transform: rotate(180deg);
        }
        .drop-list{
            position: absolute;
            left: 50%;
            margin-left: -60px;
            top: 50px;
            border: 1px solid #e3e3e3;
            z-index: 999;
            width: 130px;
            background: #fff;
            padding: 5px 0;
            display: none;
            a{
                color:#606367;
                font-size: 14px;
                &:hover{
                    color:#3c81f9
                }
            }
            .arrows-icon-fill{
                position: absolute;
                left:50%;
                margin-left: -7px;
                top:-11px;
                width:15px;
                height:15px;
                background: url('./asset/arrow-fill.png') center / 100% no-repeat;
            }
        }
    }
}
</style>
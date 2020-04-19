<template>
    <div class="tab-nav" @mouseenter="expanded = true" @mouseleave=" expanded = false">
        <div class="nav-btn">
            <router-link :to="menu.router">{{menu.name}}</router-link>
        </div>

        <div
            class="tab-main"
            :class="{'show':expanded,'hide':!expanded,'keep-show':keepExpanded}"
            @mouseleave="activeTab = null"
        >
            <div class="tab-list">
                <ul>
                    <li v-for="item in menu.list" @mouseenter="activeTab = item" >
                        <div class="nav-title">
                            <router-link :to="item.router">{{item.name}}</router-link>
                        </div>
                        <div class="sub-nav" v-if="item.children">
                            <router-link :to="item.router" v-for="subItem in item.children">{{subItem.name}}</router-link>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="tab-content" v-if="activeTab && activeTab.children && activeTab.children.length">
                <ul>
                    <li v-for="item in activeTab.children">
                        <router-link :to="item.router">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import menu from './data'
    export default {
        name: "tab-nav",
        props:{
            keepExpanded:false,
        },
        data(){
            return {
                expanded:false,
                activeTab:null,
                menu:menu
            }
        },
    }
</script>

<style lang="scss">
.tab-nav{
    width: 230px;
    background: #2b71eb;
    .nav-btn{
        height: 50px;
        line-height: 50px;
        position: relative;
        padding: 0 15px;
        background: #3c81f9;
        box-sizing: border-box;
        a{
            display: block;
            width: 100%;
            height:100%;
        }
    }

    .tab-main{
        position: relative;
    }
    .tab-list{
        li{
            border-top:1px solid rgba(255,255,255,0.1);
            padding: 10px 0 6px;
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
            &:hover{
                background: rgba(0,0,0,0.08);
            }
            .nav-title{
                a{
                    font-size:16px;
                    height: 26px;
                    line-height: 26px;
                    padding: 0 15px;
                    overflow: hidden;
                }
            }
            .sub-nav{
                padding: 0 15px;
                line-height: 25px;
                height: 25px;
                overflow: hidden;
                a{
                    font-size: 12px;
                    margin-right: 20px;
                    color: #96d1ff;
                }
            }
        }
    }
    .tab-content{
        position: absolute;
        left: 230px;
        top:1px;
        background: #fff;
        z-index: 999;
        max-width: 946px;
        border: 2px solid #3674e1;
        border-left:0;
        min-width: 100px;
        height:calc(100% - 1px);
        padding:10px 30px 0 15px;
        box-sizing: border-box;
        li{
            width: 118px;
            color: #3c81f9;
            font-size: 14px;
            line-height: 40px;
            a{
                color:#323232;
                &:hover{
                    color:#3674e1;
                }
            }
        }
    }

    .keep-show{
        display: block !important;
    }
    .show{
        display: block;
    }

    .hide{
        display: none;
    }
    a{
        color:white;
    }
}
</style>
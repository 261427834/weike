<template>
    <div class="top-nav">
        <!--  top-bar  -->
        <div class="top-bar">
            <div class="con clearfix">
                <div :class="key" v-for="(item,key) in navData.topbar">
                    <span :class="'link '+item.cls"  v-for="subItem in item" >
                        <router-link :to="subItem.router" >{{subItem.name}}</router-link>
                    </span>
                </div>
            </div>
        </div>

        <!--  top-main  -->
        <div class="top-main">
            <div class="search-section clearfix">
	            <router-link :to="{name:'home'}">
		            <div class="top-logo"><img src="./asset/logo.png"></div>
	            </router-link>
                <div class="top-search">
                    <input-search></input-search>
                </div>
                <div class="top-user">
                    <div class="user-main">
<!--                        <span class="shopping-cart">-->
<!--                            <router-link :to="{name:''}">购物车 ({{shoppingCart}})</router-link>-->
<!--                        </span>-->
                        <span v-for="item in navData.userInfo" v-if="item.cls != 'sign-in'" :class="item.cls">
                            <router-link :to="item.router">{{item.name}}</router-link>
                        </span>
	                    <span v-for="item in navData.userInfo" v-if="item.cls == 'sign-in' && !token" :class="item.cls" ref="login" @click="signIn(item.cls)">
                            <router-link :to="item.router">{{item.name}}</router-link>
                        </span>
                        <div class="user-icon"></div>
                    </div>
                </div>
            </div>


            <div class="main-nav">
                <div class="tab-nav-section">
                    <tab-nav :keep-expanded="keepExpanded"></tab-nav>
                </div>
                <div class="drop-nav-section">
                    <drop-nav></drop-nav>
                </div>
            </div>
        </div>
		<sign-in  :signInVisible.sync="signInVisible" v-on:success="success"></sign-in>
    </div>
</template>

<script>
    import navData from './data'
    import inputSearch from '../input-search/input-search'
    import tabNav from '../tab-nav/tab-nav'
    import dropNav from '../drop-nav/drop-nav'
    import signIn from '../sign-in/sign-in'

    export default {
        name: "top-nav",
        components:{ inputSearch,tabNav,dropNav,signIn},
        data(){
            return {
                navData:navData,
                shoppingCart:0,
                signInVisible: false,
	            token: ''
            }
        },
	    created() {
            this.token = localStorage.getItem('token');
	    },
        computed:{
            keepExpanded(){
                return this.$route.name === 'home'
            }
        },
        methods:{
            itemClick(item){
                console.log(item)
            },
            signIn(cls){
                if( cls == 'sign-in' ){
                    this.signInVisible = true
                }
            },
            success(){
                this.token = localStorage.getItem('token');
            }
        }
    }
</script>

<style lang="scss" scoped>
.top-nav{
    background: white;
    .top-bar{
        height: 34px;
        font-size: 13px;
        line-height: 34px;
        background: #f5f7fa;
        .con{
            width: 1200px;
            margin:0 auto;

            .link{
                position: relative;
                &:not(:last-child):after{
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 14px;
                    background: #a4aab3;
                    right: 19px;
                    top: 3px;
                }
                a{
                    color:#787c82;
                    padding-right:40px;
                }
            }

            .left{
                float:left;
            }
            .right{
                float: right;
            }
        }
    }
    .top-main{
        width: 1200px;
        margin:0 auto;
        padding-top: 20px;
        .top-logo{
            width: 230px;
            float: left;
            text-align: left;
        }
        .top-search{
            width: 400px;
            float: left;
            margin-left: 50px;
        }
        .top-user{
            float: right;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            position: relative;
            padding-right: 30px;
            span{
                margin: 0 15px;
                position: relative;
                &.sign-in:before{
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 12px;
                    background: #a4aab3;
                    right: 40px;
                    top: 5px;
                }
                &.sign-in:after{
                    /*content: '/';
                    position: absolute;
                    height: 12px;
                    color: #606367;
                    right: -16px;
                    top: -9px;*/
                }

                a{
                    font-size: 14px;
                    color: #606367;
                    position: relative;
                }
            }
            .user-icon{
                width: 30px;
                height:30px;
                border-radius: 50%;
                position: absolute;
                right:0;
                top:5px;
                background: url('./asset/avatar.jpg') center / 100% no-repeat;
            }
        }

        .main-nav{
            margin-top:15px;
            position: relative;
            .tab-nav-section{
                position: absolute;
                left:0;
                top:0;
                z-index: 999;
            }
            .drop-nav-section{
                padding-left:247px;
            }
        }
    }

}
</style>
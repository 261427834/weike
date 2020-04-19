<template>
    <div class="wk-menu">
        <el-menu
                default-active="2"
                class="el-menu-demo"
                mode="horizontal"
                :backgroundColor="styleObj.bgColor"
                :textColor="styleObj.textColor"
                :activeTextColor="styleObj.activeTextColor"
                @open="handleOpen"
                @close="handleClose"
        >
            <el-submenu index="deep_root">
                <template slot="title">
<!--                    <i class="el-icon-location"></i>-->
                    <span>{{name}}</span>
                </template>
                <template v-for="(item,index) in menuList">
                    <el-submenu v-if="item.children && item.children.length" :disabled="item.disabled" :index="'deep0_'+index">
                        <template slot="title">{{item.name}}</template>
                        <el-menu-item @click.native="itemClick(subItem)" :disabled="subItem.disabled" v-for="(subItem,subIndex) in item.children" :index="'deep1_'+index">{{subItem.name}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else @click.native="itemClick(item)" :disabled="item.disabled" :index="'deep0_'+index">{{item.name}}</el-menu-item>
                </template>
            </el-submenu>
    </el-menu>
    </div>
</template>

<script>
    export default {
        name: "wk-menu",
        props:{
            /**
             * 菜单名称
             */
            name:{
                type:String,
                default:'菜单名称'
            },
            /**
             * 菜单列表
             */
            menuList:{
                type:Array
            },
            /**
             * 菜单样式
             */
            styleObj:{
                type:Object
            },
        },
        methods:{
            handleOpen(){},
            handleClose(){},
            itemClick(item){
                /**
                 * 点击菜单项
                 * @event itemClick
                 * @type {object}
                 *
                 */
                this.$emit('itemClick',item)
            }
        }
    }
</script>

<style lang="scss">
.wk-menu{
    .el-menu.el-menu--horizontal{
        border:0;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        background: rgba(0,0,0,0) !important;
        height:50px;
        line-height: 50px;
        font-size:16px;
    }
    .el-menu--horizontal>.el-submenu{
        width: 100%;
    }
    .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
        background: rgba(0,0,0,0) !important;
    }
}


</style>
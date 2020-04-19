<template>
    <div class="wk-dropdown">
        <el-dropdown type="primary" :placement="placement">
            <span class="el-dropdown-link">
                {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                        v-for= "(item,index) in menuList"
                        :key= "index"
                        :disabled="item.disabled"
                        :divided= "item.divided"
                        @click.native="itemClick(item)"
                >{{item.name}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "wk-dropdown",
        props:{
            /**
             * 下拉菜单名称
             */
            name:{
                type:String,
                default:'下拉按钮'
            },
            /**
             * 下拉菜单出现位置
             * （top/top-start/top-end/bottom/bottom-start/bottom-end）
             */
            placement:{
                type:String,
                default: 'bottom'
            },
            /**
             * 下拉菜单项列表
             */
            menuList:{
                type:Array
            }
        },
        methods:{
            itemClick(item){
                /**
                 * 点击菜单项
                 * @event itemClick
                 * @type {object}
                 *
                 */
                this.$emit('itemClick',item);
            }
        }
    }
</script>

<style lang="scss">
.wk-dropdown{
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
}
</style>
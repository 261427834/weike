<template>
    <div class="user-center">
        <div class="user-center-wp">
            <!-- 用户中心左侧 -->
            <el-container>
                <el-aside width="400px">
                    <div class="user-center-left">
                        <div class="user-icon">
                            <div class="user-icon-top">
                                <span></span>
                                <span class="title1">普通会员</span>
                            </div>

                            <!-- 头像 -->
                            <div class="block">
                                <el-avatar :size="84" :src="circleUrl"></el-avatar>
                            </div>

                            <span>
                                <i class="el-icon-edit"></i>
                            </span>
                            <span class="title1">修改资料</span>
                        </div>
                    </div>
                </el-aside>
                <el-container>
                    <!-- 用户中心右侧上部 -->
                    <el-header>
                        <div class="user-center-top">学习概括</div>
                    </el-header>
                    <!-- 用户中心右侧下部 -->
                    <el-main>
                        <div class="user-center-main">最近学习</div>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user-center',
    data() {
        return {
            circleUrl:
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            sizeList: ['large', 'medium', 'small'],
        }
    },
}
</script>

<style scoped>
div {
    border: 1px solid;
}
.user-center {
    width: 100%;
    background-color: #f5f7fa;
}
.user-center-wp {
    width: 70%;
    margin: 0 auto;
    padding-top: 83px;
}
/* left */
.user-center-left {
    margin-right: 50px;
    width: 270px;
    height: 250px;
    background: rgba(242, 242, 242, 1);
}
.user-center-left .user-icon {
    width: 100px;
    margin: 0 auto;
    text-align: center;
}
.user-center-left .user-icon {
}

.user-icon .title1{
height:14px;
font-size:13px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(180,180,180,1);
line-height:42px;

}
</style>
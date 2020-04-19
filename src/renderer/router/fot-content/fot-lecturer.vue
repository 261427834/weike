<template>
    <div class="fot-lecturer">
        <fotBanner></fotBanner>
        <div class="fot-lecturer-wp">
            <div class="top">
                <div class="title1">讲师合作</div>
                <div class="title2">请认真填写如下合作申请信息，提交后会有专人与您联系！</div>
            </div>
            <div class="main">
                <div class="items">
<el-row>
                    <el-col :span="4">
                        <span class="title3">讲师名称</span>
                    </el-col>
                    <el-col :span="20">
                        <el-input class="inp" v-model="teacherInput" clearable></el-input>
                    </el-col>
                </el-row>
                </div>
                <div class="items"> <el-row>
                    <el-col :span="4">
                        <span class="title3">手机号码</span>
                    </el-col>
                    <el-col :span="20">
                        <el-input class="inp" v-model="telInput" clearable></el-input>
                    </el-col>
                </el-row></div>
                <div class="items"> <el-row>
                    <el-col :span="4">
                        <span class="title3">擅长课程领域</span>
                    </el-col>
                    <el-col :span="20">
                        <el-input class="inp" v-model="skillInput" clearable></el-input>
                    </el-col>
                </el-row></div>
                <div class="items">
                     <el-row>
                    <el-col :span="4">
                        <span class="title3">培训经历</span>
                    </el-col>
                    <el-col :span="20">
                        <el-input class="inp" type="textarea"  :rows="20" v-model="trainingInput" clearable></el-input>
                       <div class="sub">
                           <a href="#" @click.prevent="sub">提交申请</a> 
                           </div>
                        <div class="teacherpic">
<img :src="teacherpic" alt="">
                        </div>
                          
                    </el-col>
                </el-row>
                </div>
                
                
                
            </div>
        </div>
    </div>
</template>

<script>
import fotBanner from '@router/fot-content/fotBanner'
export default {
    name: 'fot-lecturer',
    components: {
        fotBanner,
    },
    data() {
        return {
            teacherInput: '',
            telInput:'',
            skillInput:'',
            trainingInput:'',
            teacherpic:require('../../asset/images/teacher.png')
        }
    },
    methods:{
        sub(){
            console.log('提交');
        }
    }
}
</script>

<style scoped>
.fot-lecturer{
     margin-bottom: 50px;
     padding-bottom: 300px;
}

.inp ,.fot-lecturer {
    background-color: #fff;
   
}
.fot-lecturer-wp {
    width: 70%;
    margin: 0 auto;
}

.title1 {
    text-align: center;
    height: 41px;
    font-size: 42px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(65, 65, 65, 1);
    padding-top: 94px;
}

.title2 {
    font-size: 23px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(96, 96, 96, 1);
    margin-top: 120px;
    text-align: center;
    margin-bottom: 51px;
}

.title3 {
    font-size: 19px;
    font-family: Microsoft YaHei;
    font-weight: Regular;
    color: #969696;
    line-height: 60px;
    text-align: left;
}

.items{
    margin-bottom: 32px;
}

/* 提交按钮 */
.sub {
    margin-top: 98px;
height: 75px;
text-align: center;
background-color: #4588f3;
}
.sub a{
font-size:31px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
line-height: 75px;
}
.teacherpic {
    text-align: center;
}
.teacherpic img{
margin-top:50px;
width: 90%;
margin-bottom: 50px;
}

</style>

<style>
/* 修改本组件element样式 */
.items .el-input__inner {
    height: 60px !important;
}

</style>
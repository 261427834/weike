<template>
    <div class="collaboration">
        <el-row>
            <el-col :span="24">
                <div class="collaboration-title">商务合作</div>
            </el-col>
        </el-row>
        <div class="collaboration-wp">
            <el-row class="main-wp">
                <el-col :span="20">
                    <div class="title">公司信息</div>
                </el-col>
                <el-col :span="16" :offset="4">
                    <div class="line"></div>
                </el-col>
                <el-col :span="20" :offset="4">
                    <div class="items">
                        <el-row>
                            <el-col :span="20">
                                <el-form
                                    ref="form"
                                    :model="form"
                                    label-width="150px"
                                    size="small"
                                    class="main"
                                >
                                    <el-form-item
                                        label="公司名称"
                                        prop="name"
                                        :rules="[ { required: true, message: '公司名称不能为空'} ]"
                                    >
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <!-- 营业执照 -->
                                    <el-form-item
                                        label="执照编号"
                                        prop="num"
                                        :rules="[      { required: true, message: '执照编号不能为空'}    ]"
                                    >
                                        <el-input v-model.number="form.num"></el-input>
                                    </el-form-item>
                                    <!-- 营业执照上传 -->
                                    <el-form-item
                                        label="营业执照"
                                        prop="pic"
                                        :rules="[{ required: true, message: '营业执照照片不能为空'} ]"
                                    >
                                        <el-upload
                                            action="#"
                                            list-type="picture-card"
                                            :auto-upload="false"
                                        >
                                            <i slot="default" class="el-icon-plus"></i>
                                            <div slot="file" slot-scope="{file}">
                                                <img
                                                    class="el-upload-list__item-thumbnail"
                                                    :src="file.url"
                                                    alt
                                                />
                                                <span class="el-upload-list__item-actions">
                                                    <span
                                                        class="el-upload-list__item-preview"
                                                        @click="handlePictureCardPreview(file)"
                                                    >
                                                        <i class="el-icon-zoom-in"></i>
                                                    </span>
                                                    <span
                                                        v-if="!disabled"
                                                        class="el-upload-list__item-delete"
                                                        @click="handleDownload(file)"
                                                    >
                                                        <i class="el-icon-download"></i>
                                                    </span>
                                                    <span
                                                        v-if="!disabled"
                                                        class="el-upload-list__item-delete"
                                                        @click="handleRemove(file)"
                                                    >
                                                        <i class="el-icon-delete"></i>
                                                    </span>
                                                </span>
                                            </div>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible">
                                            <img width="100%" :src="dialogImageUrl" alt />
                                        </el-dialog>
                                    </el-form-item>
                                    <!-- 营业执照结束 -->
                                    <el-form-item
                                        label="公司地区"
                                        prop="area"
                                        :rules="[{ required: true, message: '公司地区不能为空'} ]"
                                    >
                                        <vue-address
                                            :province="province"
                                            :city="city"
                                            :detail="detail"
                                        ></vue-address>
                                    </el-form-item>

                                    <el-form-item
                                        label="公司地址"
                                        :rules="[{ required: true, message: '公司地址不能为空'} ]"
                                    >
                                        <el-input v-model="form.place"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公司规模" prop="scale">
                                        <el-select
                                            v-model="form.scale"
                                            placeholder="请选择公司规模"
                                            style="width: 50%;"
                                        >
                                            <el-option label="规模一" value="guimu1"></el-option>
                                            <el-option label="规模二" value="guimu2"></el-option>
                                            <el-option label="规模三" value="guimu3"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="公司性质" prop="quale">
                                        <el-select
                                            v-model="form.quale"
                                            placeholder="请选择公司性质"
                                            style="width:50%;"
                                        >
                                            <el-option label="国有企业" value="guoyou"></el-option>
                                            <el-option label="民营企业" value="minying"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="公司行业" prop="profession">
                                        <el-select
                                            v-model="form.profession"
                                            placeholder="请选择公司行业"
                                            style="width:50%;"
                                        >
                                            <el-option label="工业" value="工业"></el-option>
                                            <el-option label="商业" value="商业"></el-option>
                                            <el-option label="农业" value="农业"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <div class="title2">联系人信息</div>
                                    <div class="cross-line"></div>
                                    <el-form-item
                                        label="用户姓名"
                                        prop="userName"
                                        :rules="[{ required: true, message: '用户姓名不能为空'} ]"
                                    >
                                        <el-input v-model="form.userName"></el-input>
                                    </el-form-item>
                                    <el-form-item
                                        label="手机号码"
                                        prop="mobel"
                                        :rules="[{ required: true, message: '手机号码不能为空'}, 
                                { type: 'number', message: '手机号码必须为数字'}
                                 ]"
                                    >
                                        <el-input v-model.number="form.mobel"></el-input>
                                    </el-form-item>
                                    <el-form-item label="电子邮箱" prop="email">
                                        <el-input v-model="form.email"></el-input>
                                    </el-form-item>
                                    <el-form-item
                                        label="验证码"
                                        prop="code"
                                        :rules="[{ required: true, message: '验证码不能为空'} ]"
                                    >
                                        <el-input v-model.number="form.code"></el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="items">
                        <el-row>
                            <el-col :span="20">
                                <div class="sub">
                                    <a href="#" @click.prevent="sub">提交申请</a>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import fotBanner from '@router/fot-content/fotBanner'
import vueAddress from '@router/fot-content/vueAddress.vue'
export default {
    name: 'collaboration',
    components: {
        fotBanner,
        vueAddress,
    },
    data() {
        return {
            form: {
                name: '', //公司名称
                num: '', //营业执照号
                pic: '', //营业执照照片
                place: '', //公司地址
                quale: '', //公司性质
                scale: '', //公司规模
                area: '', //公司地区
                profession: '', //公司行业
                userName: '', // 联系人信息
                mobel: '', //手机号码
                email: '', //email
                code: '', //验证码
            },
            file: {
                url: '',
            },
            // 组件vueAddress 数据
            province: '', //省
            city: '', //市
            district: '', //区
            detail: '', //地址
            //营业执照上传
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
        }
    },
    rules: {
        pic: [{ required: true, message: '请上传营业执照', trigger: 'blur' }],
    },
    methods: {
        sub() {
            console.log('提交数据')
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },

        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        // 营业执照上传
        handleRemove(file) {
            console.log(file)
            // this.dialogImageUrl==''
            this.dialogVisible = false
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handleDownload(file) {
            console.log(file)
        },
    },
}
</script>

<style scoped>
.collaboration {
    background-color: #f5f7fa;
}
.collaboration-wp {
    width: 85%;
    margin: 0 auto;
}
.collaboration-wp div {
    background-color: #fff;
}
.collaboration-title {
    height: 500px;
    font-size: 72px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 500px;
    text-align: center;
    background: url(https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_banner.jpg)
        no-repeat;
    margin: 0 auto;
    vertical-align: center;
}
.title {
    width: 1372px;
    height: 110px;
    font-size: 27px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(64, 64, 64, 1);
    text-align: center;
    position: absolute;
    top: -110px;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
    line-height: 150px;
    letter-spacing: 4px;
}
.line {
    width: 100%;
    height: 3px;
    text-align: center;
    border-top: 3px solid rgba(212, 212, 212, 1);
    margin-bottom: 90px;
}
.main-wp {
    width: 1372px;
    background-color: #fff;
    margin: 0 auto;
}
.items {
    width: 85%;
}
/* 联系人 */
.title2 {
    font-size: 27px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(64, 64, 64, 1);
    text-align: center;
    margin-bottom: 13px;
}
.cross-line {
    width: 100%;
    height: 3px;
    background: rgba(212, 212, 212, 1);
    border-top: solid #acc0d8 3px;
    margin-bottom: 50px;
}
/* 提交按钮 */
.items .sub {
    width: 100%;
    margin-top: 98px;
    height: 75px;
    text-align: center;
    background-color: #4588f3;
    margin-bottom: 300px;
}
.sub a {
    font-size: 31px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 75px;
}
</style>
<style >
/* 修改element样式 */

.collaboration-wp .el-form-item__label {
    font-size: 19px;
    font-family: Microsoft YaHei;
    font-weight: Regular;
    color: #969696;
    line-height: 60px;
    text-align: left;
}
.collaboration-wp .items {
    margin-bottom: 32px;
}
</style>
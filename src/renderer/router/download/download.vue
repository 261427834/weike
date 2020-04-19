<template>
    <div class="download">
        <div class="download-wp">
            <vueBanner :title1="downloadTitle1" :title2="downloadTitle2" :imgUrl="imgpic"></vueBanner>
            <el-row>
                <el-col :span="24">
                    <div class="picker-wrap">
                        <tagPicker
                            v-for="(item,index) in tagList"
                            :key="index"
                            :list="item"
                            @pick="pickItem"
                        ></tagPicker>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <div class="main-wp">
                        <el-col :span="18">
                            <div class="leftwp">
                                <div class="title">选择分类</div>

                                <div class="items">
                                    <el-row>
                                        <el-col :span="24">
                                            <el-row>
                                                <el-col :span="20">
                                                    <div class="item-title">
                                                        <span>
                                                            <img
                                                                :src="iconpic"
                                                                alt="wps"
                                                                class="wpspic"
                                                            />
                                                        </span>
                                                        <span>二建二建二建二建二建二建二建</span>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="4">
                                                    <span class="downloadpic">
                                                        <img :src="downloadpic" alt />
                                                    </span>
                                                    <span class="num">6</span>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="rightwp">
                           <div class="leftwp">
                                <div class="title">选择分类</div>

                                <div class="items">
                                    <el-row>
                                        <el-col :span="24">
                                            <el-row>
                                                <el-col :span="20">
                                                    <div class="item-title">
                                                        <span>
                                                            <img
                                                                :src="iconpic"
                                                                alt="wps"
                                                                class="wpspic"
                                                            />
                                                        </span>
                                                        <span>二建二建二建二建二建二建二建</span>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="4">
                                                    <span class="downloadpic">
                                                        <img :src="downloadpic" alt />
                                                    </span>
                                                    <span class="num">6</span>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>

							</div>
                        </el-col>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import vueBanner from '@router/fot-content/vueBanner.vue'
import tagPicker from '@components/tag-picker/tag-picker'
export default {
    name: 'download',
    components: {
        vueBanner,
        tagPicker,
    },
    data() {
        return {
            downloadTitle1: '各个行业的专家为你解惑',
            downloadTitle2: '总有人知道你问题的答案',
            imgpic:
                'https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_banner.jpg', //图片地址还要修改,暂无图片4-17
            //taglist
            tagList: [
                {
                    name: '选择分类',
                    tags: [
                        { name: '不限', picked: true },
                        { name: '资料下载', picked: false },
                    ],
                },
            ],
            iconpic: require('@renderer/asset/images/iconwps.png'),
            downloadpic: require('@renderer/asset/images/icondownload.png'),
        }
    },
    methods: {
        pickItem(info) {
            let pickQuery = { [info.type]: info.item.name }
            let query = Object.assign(
                JSON.parse(JSON.stringify(this.$route.query)),
                pickQuery
            )
            this.$router.push({
                name: 'download',
                query: query,
            })
        },
    },
}
</script>

<style scoped >
.download {
}
.download-wp {
    margin: 0 auto;

}
.main-wp {
    padding-left: 89px;
    margin: 30px auto;
		width: 85%;
}
.rightwp{
 margin-left: 30px;
}
.leftwp {
    background-color: #fff;
    height: 578px;
}
.leftwp .title {
    padding: 36px;
	border-bottom: 1px solid  rgba(62, 62, 62, 1) ;
vertical-align:top;
}
.items {
		border-bottom: 1px dotted  rgba(62, 62, 62, 1) ;
		padding: 40px;
}
.items .wpspic {
    width: 30px;
	vertical-align:middle;
}
.items .num {
    font-size: 17px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(191, 191, 191, 1);
		vertical-align:top;
}
.downloadpic img {
    width: 23px;
    height: 22px;
}
.items .item-title {
    font-size: 21px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(62, 62, 62, 1);
    line-height: 70px;

}

.picker-wrap {
    border-radius: 4px;
    background: #fff;
    padding: 15px 10px 20px;
    box-sizing: border-box;
    width: 1742px;
    height: 120px;
    display: flex;
    margin: 20px auto;
    align-items: center;
}
.tag-list {
    padding: 10px 0;
}
</style>
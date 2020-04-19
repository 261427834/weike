<template>
    <div class="works">
        <vueBanner :title1="worksTitle1" :title2="worksTitle2" :imgUrl="imgpic"></vueBanner>
        <div class="works-wp">
            <div class="works-choice">
                <div class="works-choice-wp">
                    <div class="picker-wrap">
                        <tagPicker
                            v-for="(item,index) in tagList"
                            :key="index"
                            :list="item"
                            @pick="pickItem"
                        ></tagPicker>
                    </div>
                </div>
            </div>
            <div class="works-main-wp">
                <div class="works-main-items">
                    <el-row >  
                      <el-col :span='6'  v-for="(item,index) in mainLists" :key="index">
                        <div  class="works-main-item">                      
                                <el-row  >
                                    <el-col :span="24">
                                        <img :src="item.img" alt />
                                    </el-col>
                                </el-row>
                                <el-row class="main-title">
                                    <el-col :span="24">{{item.title}}</el-col>
                                </el-row>
                                <el-row class="main-text">
                                    <el-col :span="24">{{item.text}}</el-col>
                                </el-row>
                                <el-row class="main-lists">
                                    <el-col :span="6">
                                        <i class="el-icon-view"></i>
                                        <span>{{item.view}}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <i class="el-icon-chat-round"></i>
                                        <span>{{item.chat}}</span>
                                    </el-col>
                                    <el-col :span="12">
                                        <i class="el-icon-time"></i>
                                        <span>{{item.time}}</span>
                                    </el-col>
                                </el-row>
                          
                        </div>     
                         </el-col>                      
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueBanner from '@router/fot-content/vueBanner.vue'
import tagPicker from '@components/tag-picker/tag-picker'
export default {
    name: 'works',
    components: {
        vueBanner,
        tagPicker,
    },
    data() {
        return {
            worksTitle1: '各个行业的专家为你解惑',
            worksTitle2: '总有人知道你问题的答案',
            imgpic:
                'https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_banner.jpg', //图片地址还要修改,暂无图片4-17

            //
            tagList: [
                {
                    name: '选择分类',
                    tags: [
                        { name: '不限', picked: true },
                        { name: '学员作品', picked: false },
                    ],
                },
            ],
            //

            mainLists: [
              {
                    title: '555555555555',
                    img: 'https://dummyimage.com/356x300/000/fff',
                    text:
                        '叶子大家平时都能见到,叶子大家平时都能见到,叶子大家平时都能见到,',
                    view: 2000,
                    chat: 2000,
                    time: '2019-10-17',
                },
                {
                    title: '55555555555',
                    img: 'https://dummyimage.com/356x300/000/fff',
                    text:
                        '叶子大家平时都能见到,叶子大家平时都能见到,叶子大家平时都能见到,',
                    view: 2000,
                    chat: 2000,
                    time: '2019-10-17',
                },

                {
                    title: '5555555555',
                    img: 'https://dummyimage.com/356x300/000/fff',
                    text:
                        '叶子大家平时都能见到,叶子大家平时都能见到,叶子大家平时都能见到,',
                    view: 2000,
                    chat: 2000,
                    time: '2019-10-17',
                },
                  {
                    title: '5555555555',
                    img: 'https://dummyimage.com/356x300/000/fff',
                    text:
                        '叶子大家平时都能见到,叶子大家平时都能见到,叶子大家平时都能见到,',
                    view: 2000,
                    chat: 2000,
                    time: '2019-10-17',
                },
                  {
                    title: '5555555555',
                    img: 'https://dummyimage.com/356x300/000/fff',
                    text:
                        '叶子大家平时都能见到,叶子大家平时都能见到,叶子大家平时都能见到,',
                    view: 2000,
                    chat: 2000,
                    time: '2019-10-17',
                },
             
            ],
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
                name: 'works',
                query: query,
            })
        },
    },
}
</script>

<style scoped>
.works-wp {
    width: 90%;
    margin: 30px auto;
}
.works-wp .works-choice {
    background-color: #fff;
    height: 120px;
}
.works-choice-wp {
    padding: 40px;
    font-size: 21px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(62, 62, 62, 1);
}
.works-main-wp {
    margin: 30px auto;
}

.works-main-item {
    background-color: #fff ;
    padding: 0 25px;
    height: 440px;
    /* width: 356px; */
    margin-right: 20px;
    margin-top: 40px;

}
.works-main-item img {
    /* width: 300px; */
    /* padding-top: 50px; */
}
.works-main-item .main-title {
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: 600;
    color: rgba(62, 62, 62, 1);
    background-color: #fff;
    padding-top: 10px;
}
.works-main-item .main-text {
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(62, 62, 62, 1);
     background-color: #fff;
     padding-top: 10px;
}
.works-main-item .main-lists {
    border-top: 1px solid rgba(62, 62, 62, 1);
    font-size: 16px;
    color: #d1d1d1;
     background-color: #fff;
     padding-top: 10px;
}
</style>
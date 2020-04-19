<template>
    <div class="course">
        <div class="picker-wrap" v-show="isSearch">
            <tag-picker
                v-for="item in tagList"
                :list="item"
                @pick="pickItem"
            />
        </div>
        <div class="sort-list">
            <span
                v-for="item in sortList"
                :class="{'active':item.active}"
                @click="sortActive(item)"
            >
                {{item.name}}
            </span>
        </div>
        <div class="card-container clearfix">
            <div class="card-list-section">
                <card-list :cardList ="cardList"/>
                <div class="pagination">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100"
                        @current-change="pageChange"
                    >
                    </el-pagination>
                </div>
            </div>

            <div class="card-ads">
                <h3>猜你喜欢</h3>
                <div class="card" v-for="item in cardAds">
                    <router-link :to="item.router">
                        <div class="card-img">
                            <img :src="item.img"/>
                            <div class="demand">点播</div>
                        </div>
                        <div class="card-title">{{item.title}}</div>
                        <div class="card-fee clearfix">
                            <span class="fee">{{item.fee}}</span>
                            <span class="member">{{item.member}} 人参加</span>
                        </div>

                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import courseData from './data'
    import tagPicker from "@components/tag-picker/tag-picker"
    import cardList from "./card-list/card-list"
    export default {
        name: "course",
        components:{
            tagPicker,
            cardList
        },
        data(){
            return {
                search: '',
                isSearch: true,
                tagList:[],
                sortList:[],
                cardList:[],
                cardAds:[]
            }
        },
        watch: {
            '$route' (to, from) {
                console.log(to)
	            if (to.query.type){
                    this.isSearch = false
                    this.search = this.$route.query.search
                    this.getHomeSearch()
	            } else {
                    this.isSearch = true
	            }
            }
        },
        created(){
            this.initData();
            if (this.$route.query.search) {
                this.search = this.$route.query.search
	            this.isSearch = false
                this.getHomeSearch()
            }
            
        },
        methods:{
            getHomeSearch() {
                let res = window.Api.getHomeSearch({
	                name: this.search
                })
                res.then((e)=>{
                    console.log(e)
                    if (e.code != 0){
                        return
                    }
                    this.cardList = e.data;
                })
            },
            initData(){
                courseData.tagList.forEach(item=>{
                    item.tags.forEach((subItem,index)=>{
                        if(!index){
                            subItem.picked = true
                        }else{
                            subItem.picked = false
                        }
                    })
                });
                this.tagList = courseData.tagList;

                courseData.sortList.forEach(item=>{
                    item.active = false
                });
                this.sortList = courseData.sortList;

                this.cardList = courseData.cardList;
                this.cardAds = courseData.cardAds
            },
            pickItem(info){
                let pickQuery = {[info.type]:info.item.name};
                let query = Object.assign(JSON.parse(JSON.stringify(this.$route.query)),pickQuery)
                this.$router.push({
                    name:'course',
                    query:query
                })
            },
            sortActive(item){
                this.sortList.forEach(item=>{
                    item.active = false
                })
                item.active = true;
                this.pickItem({type:'sort',item})
            },
            pageChange(index){
                this.pickItem({type:'page',item:{name:index}})
            }
        }
    }
</script>

<style lang="scss">
.course{
    width:1200px;
    margin:0 auto;
    .picker-wrap{
        border-radius: 4px;
        background: #fff;
        padding: 15px 10px 20px;
        box-sizing: border-box;
        margin-top:20px;
        .tag-list{
            padding:10px 0;
        }
    }
    .sort-list{
        height: 48px;
        line-height: 48px;
        margin-top: 10px;
        overflow: hidden;
        position: relative;
        font-size: 18px;
        margin-bottom: 5px;
        span{
            margin-right:40px;
            font-size: 13px;
            color: #5b5b5b;
            cursor: pointer;
            position: relative;
            &:hover,&.active{
                color: #3c81f9;
                &:after{
                    background:url('./asset/sort_icon.png') center / 6px no-repeat;
                }
            }
            &:after{
                content:'';
                position: absolute;
                right:-10px;
                top:5px;
                width:8px;
                height:8px;
                background:url('./asset/sort_icon_grey.png') center / 6px no-repeat;
            }
        }
    }
    .card-container{
        .card-list-section{
            padding-bottom: 100px;
            float:left;
            position: relative;
            .pagination{
                position: absolute;
                bottom:20px;
                left:50%;
                transform: translateX(-50%);
            }
        }
        .card-ads{
            float: right;
            margin-top: 10px;
            background: #fff;
            padding: 20px;
            h3{
                font-weight: normal;
                font-size: 16px;
                margin-bottom: 15px;
                color: #666;
                &:before{
                    content:'';
                    color: #666;
                    display: inline-block;
                    width: 2px;
                    height: 18px;
                    background: #3c81f9;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
            .card{
                position: relative;
                padding-bottom: 20px;
                a{
                    display: block;
                }
                .card-img{
                    width:100%;
                    height: 136px;
                    position: relative;
                    img{
                        width: 100%;
                        height:100%;
                        display: block;
                    }
                    .demand{
                        position: absolute;
                        padding: 3px 12px;
                        line-height: 18px;
                        bottom: 8px;
                        left: 8px;
                        background: rgba(0, 0, 0, 0.5);
                        color: #fff;
                        border-radius: 20px;
                        font-size: 9pt;
                    }
                }
                .card-title{
                    margin: 15px 0;
                    overflow: hidden;
                    max-height: 42px;
                    line-height: 21px;
                    font-size: 16px;
                    color: #333;
                    &:hover{
                        color:#3c81f9;
                    }
                }
                .card-fee{
                    .fee{
                        font-size: 16px;
                        color: #f5891e;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .member{
                        float:right;
                        line-height: 25px;
                        font-size: 14px;
                        color: #777;
                    }
                }

            }
        }
    }
}
</style>
<template>
    <div class="home">
        <div class="content">
			<!--banner-->
            <div class="carousel-wrap">
                <carousel :imgs="carouselData.imgs"/>
            </div>
	        <!--滚动字幕-->
	        <vue-seamless-scroll :data="carouselData.scrollList" :class-option="optionLeft" class="scroll">
		        <ul class="item clearfix">
			        <li v-for="item in carouselData.scrollList" v-text="item.name"></li>
		        </ul>
	        </vue-seamless-scroll>
	        <div class="container">
		        <div class="group-section">
			        <div class="group-container">
				        <rntrance-card></rntrance-card>
			        </div>
		        </div>
		        
<!--		        <div class="group-section-hot">-->
<!--			        <h2 class="group-title">热门推荐</h2>-->
<!--			        <div class="group-container">-->
<!--				        <card-group :cardList="teacher"/>-->
<!--			        </div>-->
<!--		        </div>-->
		        
		        <div class="group-section" v-for="item in imgGroups">
			        <h2 class="group-title">{{item.teacherCarousel.title}}</h2>
			        <div class="group-container">
				        <card-carousel :carouselInfo='item.teacherCarousel' />
				        <card-group :cardList="item.teacher"/>
				        <card-tab :tabInfo="item.teacherCardTab"/>
			        </div>
			        <div class="btn-more"><router-link :to="{}">查看更多>></router-link></div>
		        </div>
		        
		        <div class="group-section">
			        <h2 class="group-title">讲师风采</h2>
			        <div class="group-container">
				        <iecturer-list></iecturer-list>
			        </div>
<!--			        <div class="btn-more"><router-link :to="{}">查看更多>></router-link></div>-->
		        </div>
		
		        <div class="group-section">
			        <h2 class="group-title">最新资讯</h2>
			        <div class="group-container">
				        <latest-news :latestNews="latestNews"></latest-news>
			        </div>
			        <div class="btn-more"><router-link :to="{}">查看更多>></router-link></div>
		        </div>
	        </div>
        </div>
		<sticky-bar :element="stickyElement"/>
    </div>
</template>

<script>
    import homeData from './data'
    import carousel from "@components/carousel/carousel"
    import cardGroup from "./components/card-group/card-group"
    import cardCarousel from "@components/card-item/card-carousel"
    import cardTab from "./components/card-tab/card-tab"
    import rntranceCard from "./components/rntrance-card/rntrance-card"
    import iecturerList from "./components/iecturer-list/iecturer-list"
    import latestNews from "./components/latest-news/latest-news"
	import stickyBar from "@components/sticky-bar/sticky-bar"
    import vueSeamless from 'vue-seamless-scroll'
    
    export default {
        name: "home",
        components: {
            carousel,
            cardCarousel,
            cardGroup,
            cardTab,
			stickyBar,
            rntranceCard,
            iecturerList,
            latestNews,
            vueSeamless
        },
        data(){
            return {
                carouselData: {
                    imgs:[],
                    scrollList: [
	                    {
	                        name: '据家微课PC端上线啦！！！'
	                    },
	                    {
	                        name: '据家微课PC端上线啦！！！'
	                    }
                    ]
                },
                imgGroups:[],
	            teacher: [],
				stickyElement:null,
                latestNews: []
            }
        },
        computed: {
            optionLeft () {
                return {
                    direction: 2,
                    limitMoveNum: 2
                }
            }
        },
		mounted(){
        	this.$nextTick(()=>{
        		this.stickyElement = document.querySelector('.top-nav');
			})
			this.init()
		},
	    methods: {
            init() {
                this.getBanner()
                this.getHomeTop()
                this.getHomeNews()
		    },
            getBanner() {
                let res = window.Api.getBanner()
                res.then((e)=>{
                    console.log(e)
                    if (e.code != 0){
                        return
                    }
                    this.carouselData.imgs = e.data
                    this.carouselData.scrollList = e.dataScroll
                })
            },
		    getHomeTop() {
                let res = window.Api.getHomeTop()
                res.then((response)=>{
                    if (response.code != 0){
                        return
                    }
					const data = response.data;
                    /*"热门推荐", "热门证书", "补贴课程", "职场必备"*/
                    const subTitles = {
                    	'热门推荐':'REMENTUIJIAN',
						'热门证书':'REMENZHENGSHU',
						'补贴课程':'BUTIEKECHENG',
						'职场必备':'ZHICHANGBIBEI'
					}
					const tabTitles = [
					    '热门课程',
						'热门班级'
					]

                    this.imgGroups = data.map(item=>{

                    	//teacherCarousel 数据
                    	let cards = item.courseBannerList.map(subItem=>{
                    		return {
								descTitle:subItem.name,
								desc:{
									// title:subItem.name,
									text:subItem.info,
								},
								img:subItem.cover,
								router:{}
							}
						})

						let teacherCarousel = {
							title:item.name,
							subTitle:subTitles[item.name],
							cards:item.courseBannerList
						}

						// teacher 数据
						let teacher = item.courseDTOList;

                        // teacherCardTab 数据
                    	let teacherCardTab = tabTitles.map(subItem=>{
                    	    return {
                                name: subItem,
                                content: item.courseRecommondList
	                        }
	                    })
						return {
							teacher,
							teacherCarousel,
                            teacherCardTab
						}
					})
                })
		    },
            getHomeNews() {
                let res = window.Api.getHomeNews()
                res.then((e)=>{
                    console.log(e)
                    if (e.code != 0){
                        return
                    }
                    this.latestNews = e.data
                })
            },
	    },
    }
</script>

<style lang="scss">
.home{
    .carousel-wrap{
        .el-carousel__container{
            height:408px;
        }
    }
	.scroll{
		background-color: #D8E3FF;
		padding: 5px 20px;
		padding-left: 200px;
		font-size: 13px;
		color: #4588F3;
		overflow: hidden;
		margin: 0 auto;
		ul{
			width: 100%;
			li {
				float: left;
				margin-right: 30px;
			}
		}
	}
    .container{
        width: 1200px;
        margin:0 auto;
        padding-top: 50px;
        min-height: 100px;
        .group-section{
	        position: relative;
	        margin-top: 50px;
	        &:first-child{
		        margin-top: 0;
	        }
	        &:after{
		        content: "";
		        display: block;
		        height: 0;
		        clear: both;
		        visibility: hidden;
	        }
            .group-title{
                font-size: 24px;
                font-weight: normal;
                padding-bottom: 20px;
                height: 24px;
                line-height: 24px;
                display: inline-block;
                color:#333;
            }
            .card-carousel{
                float:left;
            }
            .card-group{
                float:left;
                .card-list{
                    width: 712px;
                    .card-item{
                        margin:0 20px 20px 0;
                        float:left;
                        &:nth-child(3n){
                            margin-right:0;
                        }
                    }
                }
            }
            .btn-more{
                position: absolute;
                right:0;
                top:10px;
                a{
                    font-size: 14px;
                    line-height: 30px;
                    color: #777;
                }
            }
        }
	    .group-section-hot{
		    &:after{
			    content: "";
			    display: block;
			    height: 0;
			    clear: both;
			    visibility: hidden;
		    }
		    .group-title{
			    font-size: 24px;
			    font-weight: normal;
			    padding-bottom: 20px;
			    height: 24px;
			    line-height: 24px;
			    display: inline-block;
			    color:#333;
		    }
		    .card-group{
			    float:left;
			    .card-list{
				    width: 1200px;
				    .card-item{
					    margin:0 20px 20px 0;
					    float:left;
					    &:nth-child(5n){
						    margin-right:0;
					    }
				    }
			    }
		    }
	    }
    }

}
</style>
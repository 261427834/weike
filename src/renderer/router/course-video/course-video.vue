<template>
	<div class="course-video clearfix">
		<div class="player">
			<player :vid="vid"></player>
		</div>
		<div class="menu">
			<course-menu :menuData="menuData" :index="index" @menuChange="menuChange"></course-menu>
		</div>
	</div>
</template>
<script>
	import Player from './components/player/player'
	import CourseMenu from './components/course-menu/course-menu'
	import videoData from './data'
    export default {
        name: 'course-video',
	    components: {
            Player,
            CourseMenu
        },
        data() {
            return {
                courseId: null,
	            index: 0,
                vid: videoData.vid,
                menuData: videoData.menuData
            }
        },
        created() {
            this.courseId = this.$route.query.courseId
            this.index = this.$route.query.index || null
            this.init()
        },
        methods: {
            init() {
                this.getCourseDetail()
            },
            getCourseDetail() {
                let res = window.Api.getCourseDetail({
                    id: this.courseId,
                    userId: null
                })
                res.then((e)=>{
                    console.log(e)
                    if (e.code != 0){
                        return
                    }
                    this.menuData = e.data.chapterDTOList || e.data.unitDTOList
                })
            },
            menuChange(data) {
                console.log('data')
                console.log(data)
	            this.vid = data.blwId
            }
        }
	    
    }
</script>

<style lang="scss" scoped>
	.course-video{
		width: 1200px;
		margin: 0 auto;
		.player{
			width: 800px;
			height: 600px;
			float: left;
		}
		.menu{
			width: 400px;
			height: 600px;
			float: right;
		}
	}

</style>
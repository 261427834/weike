<template>
	<div class="course-detail">
		<course-cover :data="courseData" :join="join"></course-cover>
		
		<course-info :courseData="courseData"></course-info>
	</div>
</template>

<script>
    import courseCover from './components/course-cover/course-cover'
    import courseInfo from './components/course-info/course-info'
	
    export default {
        name: 'course-detail',
	    components: {
            courseCover,
            courseInfo
	    },
	    data() {
            return {
                courseId: null,
                courseData: {},
                join: 0
            }
	    },
	    created() {
            this.courseId = this.$route.query.courseId
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
                    this.courseData = e.data
	                this.join = e.join
                })
		    }
	    }
    }
</script>

<style scoped>
	.course-detail{
		width: 1200px;
		margin: 0 auto;
	}
</style>
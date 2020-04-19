<template>
	<div class="course-info">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="介绍" name="first">
				<div v-html="courseData.courseInfoDTO.content"></div>
			</el-tab-pane>
			<el-tab-pane label="听课列表" name="second">
				<course-list :courseList="courseData.chapterDTOList || courseData.unitDTOList"></course-list>
			</el-tab-pane>
			<el-tab-pane label="学员心得" name="third">
				<course-comment :commentData="courseData.commentData"></course-comment>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import courseList from './../course-list/course-list'
	import courseComment from './../course-comment/course-comment'
    export default {
        name: 'course-info',
        components: {
            courseList,
            courseComment
        },
        props:{
            courseData:{
                type:Object
            }
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
	.course-info{
		width: 1140px;
		background-color: #ffffff;
		margin-top: 50px;
		padding: 30px;
	}
	>>> img{
		width: 100%;
	}

</style>
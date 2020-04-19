<template>
	<div class="course-list">
		<div v-for="(item,index) in courseList">
			<div class="item">
				<div class="title">{{item.title}}</div>
				<div class="btn" v-if="!item.chapterList">
					<a v-if="item.hasSign===1">立即签到</a>
					<router-link v-else :to="{name:'courseVideo',query:{courseId:item.courseId,index:item.id}}">开始学习</router-link>
				</div>
			</div>
			<div class="item" v-if="item.chapterList" v-for="(subItem,index) in item.chapterList">
				<div class="title">{{subItem.title}}</div>
				<div class="btn">
					<a v-if="!subItem.hasSign===1" style="cursor: pointer">立即签到</a>
					<router-link v-else :to="{name:'courseVideo',query:{courseId:subItem.courseId,index:subItem.id}}">开始学习</router-link>
					
				</div>
			
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'course-list',
	    props: {
            courseList: {
                type: Array
            }
	    }
    }
</script>

<style lang="scss" scoped>
	.course-list{
		padding: 10px;
		.item{
			height:52px;
			background:rgba(240,242,245,1);
			border-radius:6px;
			margin-bottom: 10px;
			padding: 0 25px;
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			-webkit-justify-content: space-between;
			align-items: center;
			-webkit-align-items: center;
			.title{
				font-size:15px;
				font-weight:400;
				color:rgba(121,121,121,1);
			}
			.btn{
				width:80px;
				height:25px;
				background:rgba(69,136,243,1);
				border-radius:3px;
				text-align: center;
				a{
					color: white;
					font-size: 13px;
				}
			}
		}
	}

</style>
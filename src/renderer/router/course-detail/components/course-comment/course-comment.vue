<template>
	<div class="course-comment">
		<div class="title">
			<p>精选学员心得</p>
		</div>
		<div class="item" v-for="item in commentData">
			<img :src="item.headPic">
			<div>
				<div class="name">{{item.name}}</div>
				<div class="time">{{item.time}}</div>
				<p>{{item.text}}</p>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'course-comment',
        props:{
            commentData:{
                type: Array
            }
        },
    }
</script>

<style lang="scss" scoped>
	.course-comment{
		padding: 10px 20px;
		.title{
			font-size:14rpx;
			font-weight:400;
			color:rgba(41,41,41,1);
			line-height:40px;
			p:before{
				content: "";
				display: inline-block;
				width:4px;
				height:17px;
				background:rgba(69,136,243,1);
				border-radius:2px;
				margin-right: 5px;
			}
			p{
				display: -webkit-flex;
				display: flex;
				align-items: center;
				-webkit-align-items: center;
			}
		}
		.item{
			padding: 20px 0;
			border-bottom: 1px solid #DEDEDE;
			display: flex;
			display: -webkit-flex;
			img{
				width: 60px;
				height: 60px;
				border-radius: 50%;
				margin-right: 20px;
			}
			.name{
				font-size:14px;
				font-weight:400;
				color:rgba(46,45,45,1);
			}
			.time{
				font-size:12px;
				font-weight:400;
				color:rgba(180,180,180,1);
				line-height: 30px;
			}
			p{
				font-size:13px;
				font-weight:400;
				color:rgba(137,137,137,1);
				line-height:20px;
			}
		}
	}
</style>
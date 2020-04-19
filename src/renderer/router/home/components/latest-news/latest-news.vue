<template>
	<div class="latest-news">
		<div class="item" v-for="item in latestNews">
			<img :src="item.cover">
			<div>
				<h3>{{item.title}}</h3>
				<p v-html="item.content"></p>
				<span>{{item.createDate}}</span>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'latest-news',
	    props: {
            latestNews: {
                type: Array
            }
	    },
	    data() {
            return {
            
            }
	    }
    }
</script>

<style lang="scss" scoped>
	.latest-news{
		.item{
			width: 550px;
			float: left;
			margin-right: 100px;
			margin-bottom: 20px;
			&:nth-child(2n){
				margin-right:0;
			}
			img{
				width: 100px;
				height: 80px;
				margin-right: 20px;
				float: left;
			}
			div{
				float: left;
				h3{
					font-size:15px;
					font-weight:400;
					color:rgba(85,85,85,1);
					line-height:25px;
				}
				p{
					font-size:9px;
					font-weight:400;
					color:rgba(153,153,153,1);
					line-height:15px;
					width: 430px;
					overflow: hidden;
					text-overflow: ellipsis;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
				}
				span{
					font-size:9px;
					font-weight:400;
					color:rgba(121,169,245,1);
					float: right;
				}
			}
		}
	}

</style>
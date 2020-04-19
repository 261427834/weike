<template>
	<div class="iecturer-list">
		<div class="item" v-for="item in list">
			<img :src="item.img">
			<h3>{{item.title}}</h3>
			<h5>{{item.subTitle}}</h5>
			<p>{{item.desc}}</p>
		</div>
	</div>
</template>

<script>
    import listData from './data'
    export default {
        name: 'iecturer-list',
	    data() {
            return {
                list: listData
            }
	    }
    }
</script>

<style lang="scss" scoped>
	.iecturer-list{
		display: -webkit-flex;
		display: flex;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		.item{
			display: -webkit-flex;
			display: flex;
			flex-direction: column;
			-webkit-flex-direction: column;
			align-items: center;
			-webkit-align-items: center;
			width: 210px;
			img{
				width: 170px;
				height: 200px;
				margin-bottom: 10px;
			}
			h3{
				font-size:18px;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:26px;
			}
			h5{
				font-size:14px;
				font-weight:400;
				color: #999999;
				line-height:28px;
			}
			p{
				font-size:9px;
				font-weight:400;
				margin-top: 5px;
				color:rgba(102,102,102,1);
				line-height:16px;
				text-align: center;
			}
		}
	}
</style>
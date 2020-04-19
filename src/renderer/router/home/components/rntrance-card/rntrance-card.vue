<template>
	<div class="rntrance-card">
		<div v-for="item in list">
			<router-link :to="item.router">
				<img :src="item.img">
				<h3>{{item.title}}</h3>
				<span></span>
				<p>{{item.desc}}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	import list from './data'
    export default {
        name: 'rntrance-card',
	    data() {
            return {
                list: list
            }
	    }
    }
</script>

<style lang="scss" scoped>
	.rntrance-card{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		align-items: center;
		-webkit-align-items: center;
		div{
			width: 162px;
			height: 82px;
			padding: 20px;
			position: relative;
			img{
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
			}
			h3{
				font-size:13px;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:25px;
			}
			span{
				display: block;
				width:44px;
				height:1px;
				background:rgba(255,255,255,1);
				margin: 5px 0;
			}
			p{
				font-size:9px;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:19px;
			}
		}
	}
</style>
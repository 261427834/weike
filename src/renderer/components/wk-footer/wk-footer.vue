<template>
	<div class="wk-footer">
		<div class="fot-content clearfix">
			<i class="wk-fot-logo"></i>
			<div v-for="item in list">
				<div class="fot-title">{{ item.title }}</div>
				<div class="fot-text" v-for="subitem in item.children" :class="subitem.class">
					<router-link :to="subitem.router">{{ subitem.text }}</router-link>
				</div>
			</div>
			
			<img class="code-img" src="./assets/wx_fot_img.jpg">
			<img class="code-img" src="./assets/wx_fot_wxapp.jpg">
		</div>
		<div class="text">Copyright2020© 据家微课. 日照市东港区杰出培训学校保留所有权利 |  沪ICP备20003109号-1</div>
	</div>
</template>

<script>
    import list from './data'
    export default {
        name: 'wk-footer',
	    data() {
            return {
                list: list
            }
	    }
    }
</script>

<style lang="scss">
	.wk-footer{
		margin-top: 50px;
		width: 100%;
		height: 300px;
		background-color: #112641;
		padding-top: 50px;
		.fot-content{
			width: 1200px;
			margin:0 auto;
			.wk-fot-logo{
				float: left;
				width: 180px;
				height: 60px;
				background: url("assets/wk_fot_logo.png") center / 100% no-repeat;
			}
			&>div{
				float: left;
				margin-left: 60px;
			}
			.fot-title{
				font-size:20px;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:80px;
			}
			.fot-text{
				font-size:14px;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:30px;
				a{
					color: #ffffff;
				}
			}
			.contact{
				width: 240px;
			}
			.code-img{
				float: right;
				width: 100px;
				height: 100px;
				background-color: white;
				margin-top: 30px;
			}
			&>.code-img:last-child{
				margin-right: 20px;
			}
		}
		.text{
			width: 100%;
			padding-top: 50px;
			text-align: center;
			margin: 0 auto;
			color: #999999;
			font-size: 13px;
		}
	}
</style>
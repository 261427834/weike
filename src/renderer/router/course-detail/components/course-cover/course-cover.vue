<template>
	<div class="course-cover clearfix">
		<img :src="data.cover">
		<div>
			<h3>{{data.name}}</h3>
			<div class="tag">点播课程</div>
			<p>
				<span>有效期：永久</span>
				<span>限购：不限</span>
			</p>
			<div class="price">
				<p>价格：{{data.currentPrice}}</p>
				<span>¥{{data.originPrice}}</span>
			</div>
			<div class="btn" v-if="join === 1">
				<router-link :to="{name:'courseVideo', query:{courseId:data.id}}">开始学习</router-link>
			</div>
			<div class="btn" v-if="join === 0" @click="goPay">立即购买</div>
		</div>
		<el-dialog :visible.sync="dialogFormVisible" >
			<div class="qrDialog">
				<div>
					<div id="qrcode" class="qrcode" ref="qrcode"></div>
					<div v-if="isPaying" class="paying el-icon-check"></div>
				</div>
				
				<h3>请用微信扫一扫</h3>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    import axios from 'axios'
    import QRCode  from "qrcodejs2"
    export default {
        name: 'course-cover',
        props:{
            data:{
                type:Object
            },
	        join:{
                type:Number
            },
        },
        components: { QRCode },
	    data() {
            return {
                dialogFormVisible: false,
                isPaying: false,
                out_trade_no: '',
                qrBody: '',
            }
	    },
	    methods: {
            goPay() {
                let that = this
	            that.dialogFormVisible = true
                axios.post('https://api.pc.jujiaweike.com/renren-web/wxpay/genBuyQrCode', {
                    price: this.data.currentPrice*100,
                    body: this.data.name
                })
                    .then(function (response) {
                        console.log(response);
                        let out_trade_no = response.data.out_trade_no
                        that.qrBody = response.data.qrBody
	                    
                        that.qrCode()
                        that.connect(out_trade_no)
                    })
            },
            connect(out_trade_no) {
                let that = this
                var stompClient = null;
                //gateway网关的地址
                var host = "https://api.pc.jujiaweike.com/renren-web";
		        //地址+端点路径，构建websocket链接地址,注意，对应config配置里的addEndpoint
		        var socket = new SockJS(host + '/webSocket' + '?token=' + out_trade_no);
		        stompClient = Stomp.over(socket);
		        stompClient.connect({}, function (frame) {
		
		            console.log('Connected:' + frame);
		            //监听的路径以及回调
		            stompClient.subscribe('/ws/queue/notifyUser', function (response) {
		                // 通知的内容
		                console.log(response);
        		        
		                let data = JSON.parse(response.body)
                        console.log(data);
		                if (data.code == 1){
		                    that.isPaying = true
		                }
		                if (data.code == 2){
                            that.$message({
                                message: '支付成功',
                                type: 'success'
                            });
                            that.dialogFormVisible = false
		                }
		            });
		        });
		    },
            qrCode () {
                this.$refs.qrcode.innerHTML = ''
	            this.isPaying = false
                let qrcode = new QRCode('qrcode', {
                    width: 124,
                    height: 124,        // 高度
                    text:  this.qrBody,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
            }
	    }
    }
</script>

<style lang="scss" scoped>
.course-cover{
	margin-top: 30px;
	background-color: white;
	padding: 30px 50px;
	img{
		width: 500px;
		height: 300px;
		margin-right: 50px;
		float: left;
	}
	&>div{
		float: left;
		h3{
			font-size:20px;
			font-weight:500;
			color:rgba(38,38,38,1);
			margin-bottom: 20px;
		}
		.tag{
			width:80px;
			height:25px;
			background:rgba(69,136,243,1);
			border-radius:6px;
			text-align: center;
			line-height: 25px;
			color: #ffffff;
			font-size:14px;
			margin-bottom: 15px;
		}
		&>p>span{
			display: inline-block;
			margin-right: 10px;
			font-size:12px;
			font-weight:400;
			color:rgba(167,167,167,1);
		}
		.price{
			font-size:16px;
			font-weight:400;
			color:rgba(121,121,121,1);
			margin-top: 15px;
			margin-bottom: 15px;
			p{
				display: inline-block;
				color: #333333;
				margin-right: 10px;
			}
			span{
				font-size:12px;
			}
		}
	}
	.qrDialog{
		min-height: 400px;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		-webkit-flex-direction: column;
		justify-content: center;
		-webkit-justify-content: center;
		align-items: center;
		-webkit-align-items: center;
		&>div{
			position: relative;
		}
		.qrcode{
			width: 124px;
			height: 124px;
			margin-bottom: 20px;
			position: relative;
			z-index: 1;
		}
		.paying {
			position: absolute;
			top: 0;
			left: 0px;
			right: 0px;
			background: rgba(88, 173, 36, 0.91);
			width: 124px;
			height: 124px;
			text-align: center;
			line-height: 124px;
			font-size: 40px;
			font-weight: 900;
			color: #ffffff;
			z-index: 10;
		}
	}
}
.btn{
	width:100px;
	height:35px;
	background:rgba(245,145,33,1);
	border-radius:6px;
	text-align: center;
	line-height: 35px;
	color: #ffffff;
	font-size: 14px !important;
	margin-top: 50px;
	padding: 0 !important;
	cursor: pointer;
	a{
		color: white;
	}
}
</style>
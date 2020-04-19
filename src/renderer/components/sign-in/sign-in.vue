<template>
	<el-dialog title="" width="300px" :visible.sync="visible" @close="close" :show-close="false">
		<div class="sign-in-dialog">
<!--			<div class="dialog-lt">-->
<!--				<div class="title">欢迎登录</div>-->
<!--				<div class="sign-input">-->
<!--					<div>手机号</div>-->
<!--					<input v-model="mobile" placeholder="请输入手机号"></input>-->
<!--				</div>-->
<!--				<div class="sign-input">-->
<!--					<div>验证码</div>-->
<!--					<input v-model="code" placeholder="请输入验证码"></input>-->
<!--					<el-button type="primary" size="mini">点击获取验证码</el-button>-->
<!--				</div>-->
<!--				<el-button class="sign-submit" type="primary" @click="login">登录</el-button>-->
<!--			</div>-->
<!--			<div class="line"></div>-->
			<div class="dialog-rt">
				<img :src="loginQr">
				<div>微信扫一扫登录</div>
			</div>
		</div>
	</el-dialog>
</template>

<script>
    import axios from 'axios'
    import QRCode  from "qrcodejs2"
    export default {
        name: 'sign-in',
        props:{
            signInVisible: Boolean
        },
        components: { QRCode },
	    data() {
            return {
                visible: this.signInVisible,
                mobile: '',
	            code: '',
                loginQr: '',
	            uuid: '',
                isPaying: false,
                out_trade_no: '',
                qrBody: '',
            }
	    },
        watch: {
            signInVisible (val) {
                this.visible = val
	            if (val) {
	                this.getLoginQr()
	            }
            }
        },
	    methods:{
            close(){
                this.$emit('update:signInVisible',false)
		    },
            getLoginQr() {
                let res = window.Api.loginQr()
                res.then((response)=>{
                    if (response.code != 0){
                        return this.$message({
                            message: response.msg,
                            type: 'error'
                        });
                    }
                    let out_trade_no = response.udid
	                this.loginQr = response.src
	                
                    this.connect(out_trade_no)
                })
            },
            connect(out_trade_no) {
                let that = this
                var stompClient = null;
                //gateway网关的地址
                // var host = "http://hy.hn3.mofasuidao.cn/renren-web";
                var host = "https://api.pc.jujiaweike.com/renren-web";
                // var host = "http://47.114.162.109:8086/renren-web";
                //地址+端点路径，构建websocket链接地址,注意，对应config配置里的addEndpoint
                var socket = new SockJS(host + '/webSocket' + '?token=' + out_trade_no);
                stompClient = Stomp.over(socket);
                stompClient.connect({}, function (frame) {

                    console.log('Connected:' + frame);
                    //监听的路径以及回调
                    stompClient.subscribe('/ws/queue/notifyScan', function (response) {
                        // 通知的内容
                        console.log(response);
                        
                        if(response.body !== 'loginFail' && response.body !== 'loginCancel' && response.body !== 'scan'){
                            let data = JSON.parse(response.body)
                            if (!!data.token) {
                                localStorage.setItem('token',data.token);
                                that.$emit('update:signInVisible',false)
                                that.$emit('success',false);
                                that.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                            }
                        }
                    });
                });
            },
		    login() {
                let res = window.Api.login({
	                mobile:this.mobile,
	                password:this.code
                })
			    res.then((e)=>{
			        console.log(e)
				    if (e.code != 0){
				        return this.$message({
                            message: e.msg,
                            type: 'error'
                        });
				    }
                    localStorage.setItem('token',e.data.token);
                    this.$emit('update:signInVisible',false)
                    this.$emit('success',false);
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
			    })
		    }
	    }
    }
</script>

<style lang="scss" scoped>
	.sign-in-dialog{
		display: flex;
		display: -webkit-flex;
		/*justify-content: space-between;*/
		/*-webkit-justify-content: space-between;*/
		justify-content: center;
		-webkit-justify-content: center;
		align-items: center;
		-webkit-align-items: center;
		.dialog-lt{
			padding: 0 30px;
		}
		.title{
			text-align: center;
			font-size:20px;
			font-weight:bold;
			color:rgba(26,26,26,1);
			line-height:30px;
		}
		.sign-input{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			padding: 20px 0;
			color: #666666;
			border-bottom: 1px solid #EAEAEF;
			&>div{
				margin-right: 20px;
			}
			input{
				color: #CCCCCC;
			}
			::-webkit-input-placeholder {
				color: #CCCCCC;
			}
		}
		.sign-submit{
			width: 200px;
			margin-top: 30px;
			margin-left: 70px;
		}
		.line{
			width:1px;
			height:175px;
			background:linear-gradient(0deg,rgba(234,234,239,1) 0%,rgba(236,235,235,1) 100%);
		}
		.dialog-rt{
			padding: 30px;
			display: flex;
			display: -webkit-flex;
			flex-direction: column;
			-webkit-flex-direction: column;
			align-items: center;
			-webkit-align-items: center;
			justify-content: space-around;
			-webkit-justify-content: space-around;
			img{
				width: 154px;
				height: 154px;
			}
			&>div:last-child{
				font-size:13px;
				font-weight:300;
				color:rgba(102,102,102,1);
				line-height:30px;
			}
			.qrDialog{
				position: relative;
			}
			.qrcode{
				width: 154px;
				height: 154px;
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
</style>
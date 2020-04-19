<template>
    <div class="sticky-bar">
        <slot>
	        <div class="sticky-top">
		       <div v-for="item in stickyTop">
			       <img :src="item.img">
			       <div>
				       <h3>{{item.title}}</h3>
				       <p>{{item.info}}</p>
			       </div>
		       </div>
	        </div>
	        <div class="sticky-bot">
		        <div v-for="item in stickyBot">
			        <img :src="item.img">
			        <h4>{{item.title}}</h4>
		        </div>
	        </div>
        </slot>
    </div>
</template>

<script>
	import stickyData from './data'
    export default {
        name: "sticky-bar",
	    data() {
            return {
                stickyTop: stickyData.stickyTop,
                stickyBot: stickyData.stickyBot
            }
	    },
        mounted(){
            this.$nextTick(()=>{
                this.scroll();
            })
        },
        beforeDestroy(){
            document.removeEventListener('scroll',this.barShow,false);
        },
        methods:{
            scroll(){
                document.addEventListener('scroll',this.barShow,false);
            },
            barShow(){
                const firePoint = this.element?this.element.offsetHeight : 0;
                const scrollT = document.documentElement.scrollTop;
                if(scrollT>firePoint){
                    this.$el.style.transform = `translateY(0)`
                }else{
                    this.$el.style.transform = `translateY(-100%)`
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.sticky-bar{
    width:100%;
    height:150px;
    position: fixed;
    left:0;
    top:0;
    background: white;
    z-index: 1111;
    border:1px solid grey;
    transform: translateY(-100%);
    transition: all ease 200ms;
	.sticky-top{
		width: 1200px;
		margin: 0 auto;
		padding: 10px 0;
		background-color: #F8F8F8;
		display: -webkit-flex;
		display: flex;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		align-items: center;
		-webkit-align-items: center;
		&>div{
			display: -webkit-flex;
			display: flex;
			align-items: center;
			-webkit-align-items: center;
		}
		img{
			width: 30px;
			height: 30px;
			margin-right: 10px;
		}
		h3{
			font-size:15px;
			font-weight:400;
			color:rgba(48,48,48,1);
			line-height:30px;
		}
		p{
			width:140px;
			font-size:10px;
			font-weight:400;
			color:rgba(127,127,127,1);
			line-height:16px;
		}
	}
	.sticky-bot{
		width:1300px;
		padding: 10px 0;
		margin: 0 auto;
		background:rgba(255,255,255,1);
		box-shadow:0px 4px 5px 0px rgba(204,204,204,0.69);
		border-radius:10px;
		display: -webkit-flex;
		display: flex;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		align-items: center;
		-webkit-align-items: center;
		&>div{
			display: -webkit-flex;
			display: flex;
			align-items: center;
			-webkit-align-items: center;
		}
		img{
			margin-right: 10px;
		}
	}
}
</style>
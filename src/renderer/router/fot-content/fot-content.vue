<template>
	<div>
		<div class="fot-banner"></div>
		<div class="fot-content" v-bind:style="router"></div>
	</div>
</template>

<script>
    export default {
        name: 'fot-content',
	    data() {
            return {
                router: {},
                exemption: {
                    background: "url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_exemption.jpg') no-repeat",
	                height: '1300px'
                },
                member: {
                    background: "url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_member.jpg') no-repeat",
	                height: '1300px'
                },
                watch: {
                    background: "url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_watch.jpg') no-repeat",
	                height: '1100px'
                },
                problem: {
                    background: "url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_problem.jpg') no-repeat",
	                height: '1800px'
                },
                channel: {
                    background: "url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_channel.jpg') no-repeat",
	                height: '1900px'
                },
                iecturer: {
                    background: "url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_iecturer.jpg') no-repeat",
	                height: '1600px'
                }
            }
	    },
	    created() {
		    this.init()
        },
	    watch: {
            '$route' (to, from) {
	            this.init()
            }
	    },
	    methods: {
            init() {
                let name = this.$route.query.name
                if ( name == 'exemption'){
                    this.router = this.exemption
                }
                if ( name == 'member'){
                    this.router = this.member
                }
                if ( name == 'watch'){
                    this.router = this.watch
                }
                if ( name == 'problem'){
                    this.router = this.problem
                }
                if ( name == 'channel'){
                    this.router = this.channel
                }
                if ( name == 'iecturer'){
                    this.router = this.iecturer
                }
                
            }
	    }
    }
</script>

<style lang="scss" scoped>
	.fot-banner{
		width: 100%;
		background: url('https://realwords.oss-cn-beijing.aliyuncs.com/web/fot_banner.jpg') no-repeat;
		height: 500px;
	}
	.fot-content{
		width: 100%;
	}
</style>
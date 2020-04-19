<template>
	<div class="player">
		<div id="player"></div>
	</div>
</template>

<script>
    export default {
        name:"player",
	    props: {
	       vid: {
		       type: String
	       }
	    },
        data () {
            return {

            }
        },
        watch: {
            vid() {
                console.log(1)
                let _this = this;
                var player = polyvObject('#player').videoPlayer({
                    wrap: '#player',
                    width: '800', // 宽度
                    height: '600', // 高度
                    forceH5: true,
                    vid: _this.vid
                });
            }
        },
        methods: {
			
        },
        mounted(){
            let _this = this;
            var player = polyvObject('#player').videoPlayer({
                wrap: '#player',
                width: '800', // 宽度
                height: '600', // 高度
                forceH5: true,
                vid: _this.vid
            });
        },
        computed: {
        }
    }
</script>

<style scoped>
</style>
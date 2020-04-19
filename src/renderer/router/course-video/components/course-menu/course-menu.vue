<template>
	<div class="course-menu">
		<el-tree ref="vueTree" :data="menuData" node-key="id" :props="defaultProps"  @node-click="handleNodeClick"></el-tree>
	</div>
</template>

<script>
    export default {
        name: 'course-menu',
	    props: {
            menuData: {
                type: Array
            },
            index: {
                type: String
            },
	    },
	    data() {
            return {
                defaultProps: {
                    children: 'chapterList',
                    label: 'title'
                }
            }
	    },
	    created() {
            this.init()
	    },
        methods: {
            init() {
                this.$nextTick(function(){
                    this.$refs['vueTree'].setCheckedNodes([this.index]);
                    console.log('执行')
                    console.log(this.index)
                })
            },
            handleNodeClick(data) {
                console.log(data);
                if (data.chapterList){
                    this.$nextTick(function(){
                        this.$refs['vueTree'].setCurrentKey(null);
                    })
                }
                
                this.$emit('menuChange', data)
            }
        }
    }
</script>

<style lang="scss">
	.course-menu{
		height: 600px;
		background-color: #1f1f1f;
		.el-tree{
			background-color: #1f1f1f;
			line-height: 22px;
			font-size: 17px;
			color: #b2b2b2;
			font-weight: 400;
			&:hover{
				background-color: #1f1f1f !important;
			}
		}
		.el-tree-node__content{
			padding: 6px 15px;
			background-color: #1f1f1f;
		}
		.el-tree-node__label{
			line-height: 22px;
			font-size: 17px;
			color: #b2b2b2;
			font-weight: 400;
		}
		.is-current{
			.el-tree-node__content{
				background-color: #1f1f1f !important;
			}
			
			.el-tree-node__label{
				color: #fa8919 !important
			}
			
		}
		.el-tree-node:focus > .el-tree-node__content {
			background-color: #1f1f1f !important;
		}
	}
</style>
<template>
    <div class="input-search">
        <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            @change="valueChange"
            v-model="value">
        </el-input>
        <div class="search-tags">
            <span v-for="item in tags">
                <router-link :to="{name:'course',query:{search:item.name,type:2}}">{{item.name}}</router-link>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "input-search",
        data(){
            return {
                value:'',
                tags:[
                    {name:'雅思',routerName:''},
                    {name:'哈佛',routerName:''},
                    {name:'会计证',routerName:''},
                    {name:'建造师',routerName:''},
                    {name:'教师资格',routerName:''},
                    {name:'韩语',routerName:''},
                    {name:'公务员',routerName:''},
                ]
            }
        },
	    methods: {
            valueChange() {
                this.$router.push({name:'course',query:{search: this.value,type:2}})
            }
	    }
    }
</script>

<style lang="scss" >
.input-search{
    .search-tags{
        span{
            margin-right:10px;
            a{
                color:#787c82;
                font-size: 9pt;
                line-height: 33px;
            }
        }
    }
}
</style>
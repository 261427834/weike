<template>
<div class="card-group" >
    <div class="card-list  clearfix">
        <card-item
            v-for="item in cardList"
            :router="{name:'courseDetail',query:{courseId:item.id}}"
            :img="item.cover"
            :title="item.name"
            :content="item.info"
            :member="item.member"
            :fee="item.free === 0 ? '免费' : item.originPrice+'.00'"
            :tag="item.tag"
        />
    </div>
</div>
</template>

<script>
    import cardItem from "@components/card-item/card-item"
    export default {
        name: "card-group",
        components:{cardItem},
        props:{
            cardList:{}
        }
    }
</script>

<style scoped>

</style>
```vue
<template>
    <wk-menu 
        :name="menu.name" 
        :menuList="menu.list" 
        :styleObj = "menu.styleObj"
        @itemClick="itemClick"
    ></wk-menu>
</template>


<script>
import wkMenu from "./wk-menu" 
export default { 
    components: { wkMenu },
    data(){
        return {
            menu:[{
                name:'导航菜单',
                styleObj:{
                    bgColor:"#545c64",
                    textColor:"#fff",
                    activeTextColor:"#ffd04b",
                },
                list:[
                    {
                        name:'选项1',
                        disabled:false,
                    },
                    {
                        name:'选项2',
                        disabled:false,
                        children:[
                            {
                                name:'选项1',
                                disabled:false,
                            },
                            {
                                name:'选项2',
                                disabled:false,
                            },
                            {
                                name:'选项3',
                                disabled:true
                            }
                        ]               
                    }                   
                ]
            }]

        }
    },
    methods:{
        itemClick(index){
            console.log('当前点击item:',index)
        }       
    }    
 }
</script>
```
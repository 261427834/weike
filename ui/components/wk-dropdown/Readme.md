```vue
<template>
    <wk-dropdown 
        :name="dropdown.name" 
        :placement="dropdown.placement" 
        :menuList="dropdown.menu" 
        @itemClick="itemClick"
    >
        
    </wk-dropdown>
</template>


<script>
import WkDropdown from "./wk-dropdown" 
export default { 
    components: { WkDropdown },
    data(){
        return {
            dropdown:{
                name:'下拉菜单按钮',
                placement:'bottom',
                menu:[
                    {
                        name:'黄金糕xxxxxx',
                        disabled:false,
                        divided:false
                    },
                    {
                        name:'双皮奶',
                        disabled:false,
                        divided:false
                    },
                    {
                        name:'蚵仔煎',
                        disabled:false,
                        divided:false
                    },
                    {
                        name:'狮子头',
                        disabled:true,
                        divided:true
                    },                    
                ]
            }

        }
    },
    methods:{
        itemClick(item){
            console.log('当前点击item:',item)
        }       
    }    
 }
</script>
```
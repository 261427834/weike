export default [
    {
        name:'首页',
        router:{name:'home'}
    },
    {
        name:'发现课程',
        router:{name:'course',query:{name:'发现课程'}},
        children:[
            {
                name:'点播课程',
                router:{name:'course',query:{name:'点播课程'}}
            },
            {
                name:'直播课程',
                router:{name:'course',query:{name:'直播课程'}}
            },
            {
                name:'面授课程',
                router:{name:'course',query:{name:'面授课程'}}
            }
        ]
    },
    {
        name:'公开课直播',
        router:{name:'course',query:{name:'公开课直播'}}
    },
    {
        name:'面授课程',
        router:{name:'course',query:{name:'面授课程'}}
    },
    {
        name:'企业商学院',
        router:{name:'course',query:{name:'企业商学院'}}
    },
    {
        name:'灵活就业',
        router:{name:'course',query:{name:'灵活就业'}}
    },
    // {
    //     name:'新闻资讯',
    //     router:{}
    // },
    {
        name:'关于我们',
        router:{name:'about'}
    },

]
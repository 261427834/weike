export default {
    name:'导航菜单',
    router:{name:'home'},
    list:[
        {
            name:'职业证书',
            router:{name:'course',query:{tag:'职业证书'}},
            children:[
                {
                    name:'财会经济',
                    router:{name:'course',query:{tag:'财会经济'}},
                },
                {
                    name:'建筑工程',
                    router:{name:'course',query:{tag:'建筑工程'}},
                },
                {
                    name:'消防安全',
                    router:{name:'course',query:{tag:'消防安全'}},
                },
                {
                    name:'教育语言',
                    router:{name:'course',query:{tag:'教育语言'}},
                },
                {
                    name:'经营管理',
                    router:{name:'course',query:{tag:'经营管理'}},
                },
                {
                    name:'计算机软考',
                    router:{name:'course',query:{tag:'计算机软考'}},
                },
                {
                    name:'医学健康',
                    router:{name:'course',query:{tag:'医学健康'}},
                },
            ]
        },
        {
            name:'技能补贴',
            router:{name:'course',query:{tag:'技能补贴'}},
            children:[
                {
                    name:'美味厨房',
                    router:{name:'course',query:{tag:'美味厨房'}},
                },
                {
                    name:'品质生活',
                    router:{name:'course',query:{tag:'品质生活'}},
                },
                {
                    name:'人工智能',
                    router:{name:'course',query:{tag:'人工智能'}},
                },
                {
                    name:'家政服务',
                    router:{name:'course',query:{tag:'家政服务'}},
                },
                {
                    name:'经营管理',
                    router:{name:'course',query:{tag:'经营管理'}},
                },
                {
                    name:'安全管理',
                    router:{name:'course',query:{tag:'安全管理'}},
                },
                {
                    name:'机械制造',
                    router:{name:'course',query:{tag:'机械制造'}},
                },
                {
                    name:'建筑工程',
                    router:{name:'course',query:{tag:'建筑工程'}},
                },
                {
                    name:'农业林业',
                    router:{name:'course',query:{tag:'农业林业'}},
                },
            ]
        },
        {
            name:'商学院',
            router:{name:'course',query:{tag:'商学院'}},
            children:[
                {
                    name:'经营管理',
                    router:{name:'course',query:{tag:'经营管理'}},
                },
                {
                    name:'市场营销',
                    router:{name:'course',query:{tag:'市场营销'}},
                },
                {
                    name:'财务金融',
                    router:{name:'course',query:{tag:'财务金融'}},
                },
                {
                    name:'客户服务',
                    router:{name:'course',query:{tag:'客户服务'}},
                },
                {
                    name:'职业素质',
                    router:{name:'course',query:{tag:'职业素质'}},
                },
                {
                    name:'精益生产',
                    router:{name:'course',query:{tag:'精益生产'}},
                },
                {
                    name:'法律风控',
                    router:{name:'course',query:{tag:'法律风控'}},
                },
                {
                    name:'采购物流',
                    router:{name:'course',query:{tag:'采购物流'}},
                },
                {
                    name:'语言艺术',
                    router:{name:'course',query:{tag:'语言艺术'}},
                },
                {
                    name:'兴趣爱好',
                    router:{name:'course',query:{tag:'兴趣爱好'}},
                },
            ]
        },
        {
            name:'养老护理',
            router:{name:'course',query:{tag:'养老护理'}},
            children:[
                {
                    name:'美国睿莱课程体系',
                    router:{name:'course',query:{tag:'美国睿莱课程体系'}},
                },
                {
                    name:'养老护理商业课',
                    router:{name:'course',query:{tag:'养老护理商业课'}},
                },
                {
                    name:'养老护理证书',
                    router:{name:'course',query:{tag:'养老护理证书'}},
                },
            ]
        },
        {
            name:'政务党建',
            router:{name:'course',query:{tag:'政务党建'}},
            children:[
                {
                    name:'政务',
                    router:{name:'course',query:{tag:'政务'}},
                },
                {
                    name:'党建',
                    router:{name:'course',query:{tag:'党建'}},
                },
                {
                    name:'企业文化',
                    router:{name:'course',query:{tag:'企业文化'}},
                },
            ]
        },
        {
            name:'亲子公益',
            router:{name:'course',query:{tag:'亲子公益'}},
            children:[
                {
                    name:'培训',
                    router:{name:'course',query:{tag:'培训'}},
                },
                {
                    name:'活动',
                    router:{name:'course',query:{tag:'活动'}},
                },
                {
                    name:'讲座',
                    router:{name:'course',query:{tag:'讲座'}},
                },
            ]
        }
    ]
}
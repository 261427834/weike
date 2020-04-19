export default {
    topbar:{
        left:[
            {
                name:'据家商城',
                cls:'',
                router:{name:'home'}
            },
            {
                name:'社群中心',
                cls:'',
                router:{name:'community'}
            },
            {
                name:'学习问答',
                cls:'',
                router:{name:'studyQuiz'}
            },
            {
                name:'资料下载',
                cls:'',
                router:{name:'download'}
            },
            {
                name:'学员作品',
                cls:'',
                router:{name:'works'}
            }
        ],
        right:[
            {
                name:'开通会员',
                cls:'',
                router:{name:'userCenter'}
            },
            {
                name:'推荐好友',
                cls:'',
                router:{}
            },
            {
                name:'商务合作',
                cls:'',
                router:{name:'collaboration'}
            }
        ]
    },
    userInfo:[
        {
            name:'我的学习',
            cls:'',
            router:{name:'userCenter'}
        },
        {
            name:'我的考试',
            cls:'',
            router:{name:'userCenter'}
        },
        {
            name:'我的工作',
            cls:'notify',
            router:{name:'userCenter'}
        },
        {
            name:'登录',
            cls:'sign-in',
            router:{}
        },
        // {
        //     name:'注册',
        //     cls:'sign-up',
        //     router:{}
        // }
    ],

}
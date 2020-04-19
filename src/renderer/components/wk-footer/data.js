export default [
    {
        title: '关于我们',
        children: [
            {
                text: '免责声明',
                icon: '',
                router: {name:'fotExemption',query:{name:'fot-exemption'}}
            }
        ]
    },
    {
        title: '帮助中心',
        children: [
            {
                text: '会员权益',
                icon: '',
                router: {name:'fotMember',query:{name:'fot-member'}}
            },
            {
                text: '如何观看',
                icon: '',
                router: {name:'fotWatch',query:{name:'fot-watch'}}
            },
            {
                text: '常见问题',
                icon: '',
                router: {name:'fotProblem',query:{name:'fot-problem'}}
            },
        ]
    },
    {
        title: '商务合作',
        children: [
            {
                text: '渠道加盟',
                icon: '',
                router: {name:'fotChannel',query:{name:'fot-channel'}}
            },
            {
                text: '讲师合作',
                icon: '',
                router: {name:'fotLecturer',query:{name:'fot-lecturer'}}
            }
        ]
    },
    {
        title: '联系我们',
        children: [
            {
                class: 'contact',
                text: '客服热线 : 0633-2215282',
                icon: '',
                router: {}
            },
            {
                class: 'contact',
                text: '联系地址 : 日照市东港区人力资源服务产业园12楼',
                icon: '',
                router: {}
            }
        ]
    },
]
// 目录配置参阅：
// https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Configuration.md#pagepersection
module.exports = [
    {
        name: "全部组件",
        content: "styleguide/readme.md",
        sectionDepth: 2,
        sections: [
            {
                name: "Features",
                content: "styleguide/readme.md",
                components: "ui/features/*/*.vue",
                sections: []
            },
            {
                name: "Components",
                content: "styleguide/readme.md",
                components: "ui/components/*/*.vue",
                sections: []
            }
        ]
    }
]
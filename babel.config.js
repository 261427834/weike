module.exports ={
    "presets":[
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                    "node": "current"
                }
            }
        ]
    ],
    "plugins":[
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        "@babel/plugin-transform-runtime",
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}

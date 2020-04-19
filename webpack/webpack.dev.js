const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // host: '0.0.0.0',
        // port: '8080',
        hot: false,
        historyApiFallback: true,
        // publicPath:'https://xxx.com/'  //打包输出目录 可以是本地路径 或者 url地址
    },
})

module.exports = devConfig

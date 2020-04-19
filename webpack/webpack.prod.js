const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

const prodConfig = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output:{
        publicPath: '',
    }
})

module.exports = prodConfig

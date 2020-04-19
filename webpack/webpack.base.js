const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const rootPath = process.cwd()

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(rootPath, 'dist'),
        publicPath: '',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            '@src': path.resolve(rootPath, 'src'),
            '@renderer': path.resolve(rootPath, 'src/renderer'),
            '@router': path.resolve(rootPath, 'src/renderer/router'),
            '@components': path.resolve(rootPath, 'src/renderer/components'),
            '@ui': path.resolve(rootPath, 'ui'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/gi,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                use:[
                    {
                        loader:'vue-loader',
                        options: {
                            extractCSS: true
                        }
                    }
                ] ,
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader',
                        options: {
                            root: path.resolve(__dirname, 'src'),
                            attrs: ['img:src', 'link:href']
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:'css-loader',
                        },
                        'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader','postcss-loader','sass-loader','postcss-loader']
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|otf|woff|woff2|svg|svgz|ico)(\?.+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[ext]',
                            outputPath:'img/',
                            esModule: false,
                            // publicPath:'../'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'src/index.html'),
        }),
        //提供全局变量   引入的仓库可能依赖第三方仓库的全局变量
        // new webpack.ProvidePlugin({
        //     '$':jQuery
        // })
    ],
}

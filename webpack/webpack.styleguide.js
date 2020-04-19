const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const rootPath = process.cwd()

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            '@src': path.resolve(rootPath, 'src'),
            '@renderer': path.resolve(rootPath, 'src/renderer'),
            '@router': path.resolve(rootPath, 'src/renderer/router'),
            '@components': path.resolve(rootPath, 'src/render/components'),
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
                test: /\.css$/,
                use: ['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','postcss-loader','sass-loader','postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|otf|woff|woff2|svg|svgz|ico)(\?.+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath:'img/',
                            esModule: false,
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
    ],
}

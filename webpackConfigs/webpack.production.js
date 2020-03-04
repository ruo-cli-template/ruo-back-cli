const path = require('path')
const merge = require('webpack-merge');
const base = require("./webpack.base.js");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const config = merge.smart(base, {
    mode: 'production',
    optimization: {
        ///提取共用代码 -- 代码中引用的插件
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'verdor',
                    enforce: true
                }
            }
        },
        //压缩
        minimizer: [
            new OptimizeCssAssetsPlugin({}), // 压缩 css,使用minimizer会自动取消webpack的默认配置，所以记得用UglifyJsPlugin
            new UglifyJsPlugin({
                // 压缩 js
                uglifyOptions: {
                    ecma: 6,
                    cache: true,
                }
            })
        ]
    },


    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {

                        }
                    },
                    "postcss-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {

                        }
                    },
                    "postcss-loader",
                    'less-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {

                        }
                    },
                    "postcss-loader",
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '/css/[name].[contenthash:5].css'
        }),

    ]
})

module.exports = config
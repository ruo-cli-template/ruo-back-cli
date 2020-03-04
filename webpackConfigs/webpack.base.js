const path = require('path')
const vueloaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "../src/main.js"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].min.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },
    //警告 webpack 的性能提示
    performance: {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
                // plugins: ['syntax-dynamic-import'],
                compact: false
            },
            exclude: '/node_modules/'

        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                "postcss-loader"
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                "postcss-loader",
                'less-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                "postcss-loader",
                'sass-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                //使用插件时带上的参数
                options: {
                    name: 'assets/images/[name].[hash:4].[ext]',
                }
            }]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: 'babel-loader',
                    css: ExtractTextPlugin.extract({
                        use: ["css-loader"],
                        fallback: ['vue-style-loader']
                    }),
                    less: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true, //css压缩
                                '-autoprefixer': true,
                            }
                        },
                            'scss-loader'
                        ],
                        fallback: ['vue-style-loader']
                    }),
                }
            }
        },
        // 字体loader
        {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: 'url-loader',
            query: {
                name: 'assets/font/[name]-[hash:8].[ext]'
            }
        },
        {
            test: /\.html$/,
            use: [
                'html-loader'
            ]
        }
        ]
    },
    // 在webpack启动后会从配置入口模块触发找出所有的以来模块  resolve配置webpack如何寻找这些模块
    resolve: {
        // 通过匹配后缀
        extensions: ['.js', '.jsx', '.json', '.less', '.scss', 'css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, "../src")
        }
    },
    plugins: [
        //生成开发环境中的虚拟html文件
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'), // 配置文件模板
            filename: 'index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true, // 删除空白符与换行符
                removeAttributeQuotes: true // 移除HTML中的属性引号
            }

        }),

        new vueloaderPlugin()
    ]
}
const path = require('path')
const htmlWebpackPlug = require('html-webpack-plugin');
const base = require("./webpack.base.js");
const merge = require('webpack-merge');
const vueloaderPlugin = require('vue-loader/lib/plugin');

const config = merge.smart(base, {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        // path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new htmlWebpackPlug({
            template: './index.html',
            filename: 'index.html'
        }),
        new vueloaderPlugin()
    ]
})


module.exports = config 
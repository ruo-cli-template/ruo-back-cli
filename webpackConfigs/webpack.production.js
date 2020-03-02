const path = require('path')
const htmlWebpackPlug = require('html-webpack-plugin');
const vueloaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, "../src/components/index.js"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.min.js'
    },

    plugins: [
        new htmlWebpackPlug({
            template: './index.html',
            filename: 'index.html'
        }),
        new vueloaderPlugin()
    ]
}
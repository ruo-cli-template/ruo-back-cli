const path = require('path')
const webpack = require('webpack');
const base = require("./webpack.base.js");
const merge = require('webpack-merge');


const config = merge.smart(base, {
    mode: 'development',
    devServer: {
        port: 8080,
        hot: true,
        overlay: true,
        compress: true,
        open: true,
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

    ]
})
module.exports = config 
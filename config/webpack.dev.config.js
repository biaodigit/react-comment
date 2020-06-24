const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const config = {
    entry: {
        app: ['react-hot-loader/patch', './src/index.tsx']
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 7777,
        hot: true,
        hotOnly: true,
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html'
        }
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:7777' })
    ],
}

module.exports = merge(baseConfig, config)
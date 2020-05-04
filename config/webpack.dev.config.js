const path = require('path')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const config = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 7777
    }
}

module.exports = merge(baseConfig, config)
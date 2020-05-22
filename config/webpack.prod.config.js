const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge')

const config = {
    entry: {
        app: './src/index.tsx'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].chunk.css'
        })
    ]
}

module.exports = merge(baseConfig, config)
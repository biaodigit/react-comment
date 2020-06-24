const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge')

const config = {
    mode: 'production',
    entry: {
        app: './src/index.tsx'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].chunk.css'
        }),
        new BundleAnalyzerPlugin()
    ]
}

module.exports = merge(baseConfig, config)
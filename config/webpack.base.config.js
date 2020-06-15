const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const express = require('express')
const app = express()
const likesMockData = require('../public/likes.json')
const discountsMockData = require('../public/discounts.json')
const apiRoutes = express.Router()
app.use(apiRoutes)

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunk].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        useCache: true,
                        babelCore: '@babel/core'
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-cssnext')(), // 向后版本兼容
                                require('cssnano')() // 向前版本兼容
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'assets/image/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../template/index.html')
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            tsconfig: path.resolve(__dirname, '../tsconfig.json')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public/favicon.ico'),
                    to: path.resolve(__dirname, '../dist/assets')
                },
                // {
                //     from: path.resolve(__dirname, '../public/logo.png'),
                //     to: path.resolve(__dirname, '../dist/public')
                // },
            ]
        })
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        axios: 'axios'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "@": path.resolve(__dirname, '../src/')
        }
    },
    devServer: {
        before(app) {
            app.get('/api/likes-data', (req, res) => {
                res.json(likesMockData)
            })
            app.get('/api/discounts-data', (req, res) => {
                res.json(discountsMockData)
            })
        }
    }
}
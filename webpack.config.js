const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment && 'development' || 'production',
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: isDevelopment && '/' || './',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            assets$: path.resolve(__dirname, 'src/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /(\.module)?\.scss$/,
                use: [
                    isDevelopment && 'style-loader' || MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]',
                            },
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.svg$/i,
                issuer: /\.jsx?$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    }
                }]
            },
            {
                test: /\.png$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: isDevelopment && '[id].css' || '[id].[hash].css'
        })
    ],
};
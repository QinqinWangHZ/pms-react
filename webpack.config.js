var path = require('path');
var webpack = require('webpack');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// webpack扩展功能
var alias = require('./bin/alias.js');

module.exports = {
    entry: {
        index: path.resolve(__dirname,'src/main.js'),
        common: ['react', 'react-dom','react-router'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js',
    },
    resolve: {
        alias: alias,
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"dev"'
            }
        }),
        new ExtractTextPlugin('css/[name].[hash:8].css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'js/common.[hash:8].js'),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunks: ['common', 'index']
        }),
    ],
    devtool:'eval-source-map',
    devServer: {
        historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true,
        inline: true, // 设置为true，当源文件改变时会自动刷新页面
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        "proxy": {
          "/api": {
            "target": "http://dsppre.adbaitai.com",
            "changeOrigin": true
          },
          "/mock": {
            "target": "https://www.easy-mock.com",
            "changeOrigin": true
          },
          "/mockjs": {
            "target": "http://rapapi.org",
            "changeOrigin": true
          },
            '/sapi/*': {
              changeOrigin: true,
              target: 'http://newshop.m.beta.yinyuetai.com/',
              host: 'yinyuetai.com'
            },
        }
    },
    postcss: [
        require('autoprefixer')
    ],
    module: {
        loaders: [
            {
                test: /\.(?:js|jsx)$/,
                loaders: ["react-hot","babel"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap!sass-loader')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|jepg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
}

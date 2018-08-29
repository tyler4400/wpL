/**
 * Created by Tyler on 2018/8/29 11:29.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader',
            // },{
            //     test: /\.css/, //匹配处理文件
            //     //loader: styleLoader//名称
            //     include: [
            //         path.resolve(__dirname, 'src'),
            //     ],
            //     use: ['style-loader', 'css-loader'],
            // },{
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader',
            //     }),
            },{
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
        ],
    },

    // 代码模块路径解析的配置
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ],

        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',//配置输出文件名和路径
            template: 'src/index.html'//配置文件模板
        }),
        new ExtractTextPlugin('[name].css'),
    ],
};

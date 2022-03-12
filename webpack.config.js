const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = { 
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },
    devServer: {
        port: 3000
    }
};
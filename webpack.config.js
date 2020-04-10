const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
//@todo 对 .vue 文件使用less，加载解析后的 less 如何自动引入到页面

module.exports = {
    entry: {
        vendor: ["vue"],
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    hotReload: true
                }
            }
            ,{
                test: /\.js$/,
                use: ["babel-loader"]
            }
            ,{
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    }
                    ,{
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                    ,{
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["./dist"]
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: "vendor"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    mode: "development"
}




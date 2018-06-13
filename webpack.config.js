const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const config={
    mode:"development",
    entry:{
        index:"./app/index.js"
    },
    output:{
        path:path.resolve(__dirname,"dist/js"),
        filename:"[name].bundle.js",
        publicPath:"http://localhost:3011/",
        chunkFilename:"[name].[chunkhash:5].js"
    },
    module:{
        rules:[{
            test:/\.jsx?/i,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["es2015","react"],
                    plugins:["dynamic-import-webpack"]
                }
            }
        }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:'app',
            template: './app/index.tmpl.html',
            filename:"../index.html",
            inject: 'body',
            chunks:true
        })
    ],
    resolve:{
        extensions:[".js",".css",".json",".jsx"]
    },
    devServer:{
        port:3011,
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        hot:true
    }
};
module.exports=config;
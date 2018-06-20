const path = require('path');
const webpack = require('webpack')
const rucksack = require('rucksack-css');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: path.join(__dirname + '/app/index.html'),
//     filename: 'index.html',
//     inject: 'body'
// })
let baseConfig = {
    context : path.join(__dirname,'./client'), //基础目录
    entry : { //入口文件
        jsx:'./index.js',
        html :'./index.html',
        vendor:[
            'react',
            'react-dom',
            'react-redux',
            'redux'
        ]
    },
    module : {
        loaders:[
            {
                test:/\.(ttf|eto|svg|otf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:"url-loader?limit=1024&name=[path][name].[ext]&outputPath=font/&publicPath=output/"
            },
            {
                test:/\.(jpg|png|jpeg)$/,
                loader:"url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/&mimetype=image/png"
            },
            {
                test:/\.(gif)$/,
                loader:"url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/&mimetype=image/gif"
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders: 1,
                            modules:true
                        }
                    },
                    {
                        loader:"postcss-loader",
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                rucksack({ autoprefixer : true})
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader?cacheDirectory=true']
            }
        ]
    },
    resolve:{ //自动解析确定的扩展
        extensions:['.js','.jsx']
    }
}
function getEnv(){
    const args = require('minimist')(process.argv.slice(2));
    let env;
    if(args._.length > 0 && args._.indexOf('start') !== -1){
        env = 'test';
    }else if(args.env){
        env = args.env;
    }else{
        env = 'dev'
    }
    return env;
}
let env = getEnv();

let envConfig = {
    'build':{
        output:{
            path : path.join(__dirname,'./static'),
            filename : 'bundle-[hash:6].js'
        },
        plugins:[
            new webpack.optimize.UglifyJsPlugin(), //js压缩
            new webpack.optimize.DedupePlugin(), //删除重复数据
            new webpack.optimize.CommonsChunkPlugin({
                name : "vendor",
                filename : "vendor.bundle.js"
            }), //分割共有模块和代码模块
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
            }),
            new webpack.ProvidePlugin({
                ENV: __dirname + '/client/env/' + (process.env.NODE_ENV || 'development'),
                IMAGEPATH:__dirname+'/client/config/image'
            }),
            new webpack.NoErrorsPlugin(), //配置了NoErrorsPlugin插件，用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        ]

    },
    'dev':{
        output: {
            path: path.join(__dirname, './static'),
            filename: '[name].js',
        },
        plugins:[
            new webpack.optimize.UglifyJsPlugin(), //js压缩
            new webpack.optimize.DedupePlugin(), //删除重复数据
            new webpack.optimize.CommonsChunkPlugin({
                name : "vendor",
                filename : "vendor.bundle.js"
            }), //分割共有模块和代码模块
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
            }),
            new webpack.ProvidePlugin({
                ENV: __dirname + '/client/env/' + (process.env.NODE_ENV || 'development'),
                IMAGEPATH:__dirname+'/client/config/image'
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    devServer: {
                        contentBase: "./client", //本地服务器所加载的页面所在的目录
                        colors: true, //终端中输出结果为彩色
                        historyApiFallback: true, //不跳转
                        inline: true, //实时刷新
                        disableHostCheck : true,
                        hot : true
                    }
                }
            }),
        ]
    }
}

module.exports = Object.assign({},baseConfig,envConfig[env]);
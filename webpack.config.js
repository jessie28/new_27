const path = require('path');
const webpack = require('webpack')
const rucksack = require('rucksack-css');
let baseConfig = {
    context : path.join(__dirname,'./client'), //基础目录
    entry : { //入口文件
        index:['./index.js','./index.html'],
        vendor:[
            'react',
            'react-dom',
            'react-redux',
            'redux'
        ]
    },
    module : {
        rules:[
            {
                test:/\.(ttf|eot|otf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:["url-loader?limit=5120"]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            },
            {
                test:/\.(jpg|png|jpeg)$/,
                use:["url-loader?limit=512000&name=[name]-[hash:6].[ext]&mimetype=image/png"] //limit 500kb
            },
            {
                test:/\.(gif)$/,
                use:["url-loader?limit=512000&name=[path][name].[ext]&mimetype=image/gif"]
            },
            {
                test: /\.html$/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.(scss$|css)$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'client'),
                use: ['babel-loader?cacheDirectory=true']
            },
            {
                // iconfont
                test: /icons/,
                // embed解决 对publicPath解析bug
                use: [
                    'style-loader',
                    'css-loader',
                    'webfonts-loader'
                ]
            }
        ]
    },
    resolve:{ //自动解析确定的扩展
        extensions:['.js', '.jsx', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './client')
        ]
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
                UTILPATH:__dirname+'/client/util/util',
                CONFIG:__dirname+'/client/config/index'
            }),
            new webpack.NoEmitOnErrorsPlugin(), //配置了NoErrorsPlugin插件，用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        ]

    },
    'dev':{
        output: {
            path: path.join(__dirname, './static'),
            filename: '[name].js',
        },
        plugins:[
            new webpack.optimize.UglifyJsPlugin(), //js压缩
            new webpack.optimize.CommonsChunkPlugin({
                name : "vendor",
                filename : "vendor.bundle.js"
            }), //分割共有模块和代码模块
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
            }),
            new webpack.ProvidePlugin({
                ENV: __dirname + '/client/env/' + (process.env.NODE_ENV || 'development'),
                UTILPATH:__dirname+'/client/util/util',
                CONFIG:__dirname+'/client/config/index'
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
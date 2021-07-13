//resolve用来拼接绝对路径的
const {resolve} =require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    entry: ['./src/index.js', './src/dev.js'],
    output:{
        filename:'main.js',
        path:resolve(__dirname,"build")
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
        },
    module:{
        rules:[
            {
                test: /\.css$/, 
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: '../'
                      },
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("postcss-preset-env")(),
                                ]
                            }
                        }
                    },
                  ],
            }, 
            {
                test:/\.less$/,
                use:[  
                    {
                    loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader', 
                    'less-loader',
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    esModule:false, 
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:"html-withimg-loader",
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader", //如果有.babelrc 文件则参数 .babelrc 文件规则
                },
             },
             {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html',
                minify:{
                    collapseWhitespace:true,
                    removeComments:true
                } 
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].less',
            chunkFilename: '[id].less',
          }),
          new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          }),
          new webpack.HotModuleReplacementPlugin(),
    ],
    // mode:'development',
    mode:'production',
    target: 'web',//修复hmr
    devServer: {
        hot: true, //在devServer中增加hot字段
        contentBase: resolve(__dirname, './src/'),
        publicPath: '/',
        host: '127.0.0.1',
        port: 3000,
        stats: {
            colors: true
        }
    },
    devtool:'source-map'
}
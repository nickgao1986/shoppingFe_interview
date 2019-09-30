var webpack             = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
module.exports={
    entry:{
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
    },
    output:{
        path:'./dist',
        filename:'js/[name].js'
    },
    externals:{
        'jquery':'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") }
        ]
    },
    plugins: [
        // 提出公共部分
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
    ]
}
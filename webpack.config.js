var path=require('path');
var CopyRightWebpackPlugin=require('./plugins/copyright-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    mode:'development',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new CopyRightWebpackPlugin({
            name:'yyj'
        })

    ]
}
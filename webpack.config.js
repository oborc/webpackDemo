'use strict'

const path = require('path');

module.exports = {
    entry: {
        index: "./src/index.js",
        entry2: "./src/entry2.js"
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module:{
        rules:[
            {test:/.\txt$/,use:'raw-loader'} // 匹配txt结尾的文件，用raw-loader将文件以字符串的形式导入
        ]
    }
}
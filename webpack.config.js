var path = require("path");
module.exports = {
    entry: "./src/main.js",  //入口文件
    output: {
        path: path.resolve(__dirname, './dist'), 
        filename: "bundle.js" //压缩编译后的文件名
    },
    //模块的加载，通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器。
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg)$/,loader: 'url-loader?limit=10000'},
            { test: /\.vue$/,loader: 'vue-loader'}
        ]
    }
};
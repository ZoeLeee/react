const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, 'src/index'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      include: [
        path.join(__dirname, 'src')
      ],
      use: ['babel-loader?cacheDirectory=true']
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname,"./dist"),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: "9527"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./index.html"
    })
  ]
};
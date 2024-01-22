const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'src/index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },{
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader', // or 'file-loader' if you installed file-loader
            options: { 
              name: '[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
  ],
}
module.exports = config;
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      // CSS
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url?limit=8192',
        include: path.join(__dirname, 'app')
      }
    ]
  }
};

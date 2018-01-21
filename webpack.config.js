const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './client/index',
  },
  output: {
    path: path.join(__dirname, 'client/dist'),
    publicPath: '/client/dist/',
    filename: '[name].min.js',
  },
  devServer: {
    publicPath: 'http://localhost:8080/client/dist/',
    stats: { colors: true },
    port: 4000,
    hot: true,
  },
  plugins: [
    // activate HMR
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

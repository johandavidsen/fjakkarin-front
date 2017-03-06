const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
    publicPath: '/scripts',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          'env': {
            'development': {
              'presets': ['react-hmre']
            }
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

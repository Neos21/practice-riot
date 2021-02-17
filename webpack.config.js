
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',  // 本番ビルド時にパスを直すモノ https://webpack.js.org/configuration/output/#outputpublicpath https://qiita.com/chuck0523/items/caacbf4137642cb175ec
    filename: 'bundle.js',
    chunkFilename: 'chunks/[name]/index.[chunkhash].js',
    devtoolModuleFilenameTemplate: 'source-webpack:///[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: 'source-webpack:///[resourcePath]?[hash]'
  },
  devtool: false,  // '#source-map',
  devServer: {
    open: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: (/[\\/]node_modules[\\/]/),
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: (/\.riot$/),
        exclude: (/node_modules/),
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      }
    ]
  }
};

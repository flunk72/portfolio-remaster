const webpack = require('webpack'),
      merge = require('webpack-merge'),
      baseWebpackConfig = require('./webpack.base.config.js'),

      devWebpackConfig = merge(baseWebpackConfig, {
        mode: 'development',
        devServer: {
          port: 8081,
          overlay: true,
          contentBase: baseWebpackConfig.externals.paths.dist,
        },
        devtool: 'cheap-module-eval-source-map',
        plugins: [
          new webpack.SourceMapDevToolPlugin ({
            filename: '[file].map'
          })
        ]
      });
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
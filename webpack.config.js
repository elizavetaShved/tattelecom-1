const path = require('path')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  entry: {
    // ['main-page']: './src/js/pages/main-page.js',
    // ['mobile-communication-page']: './src/js/pages/mobile-communication-page.js',
    // ['cashback-page']: './src/js/pages/cashback-page.js',
    // ['together-profitable-page']: './src/js/pages/together-profitable-page.js',
    // ['roaming-page']: './src/js/pages/roaming-page.js',
    // ['ussd-requests-page']: './src/js/pages/ussd-requests-page.js',
    ['fly-old-number-page']: './src/js/pages/fly-old-number-page.js'
  },
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules(?![/|\\](dom7|swiper))/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  optimization: {
    usedExports: true,
  },
  mode: 'development',
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru']
    })
  ]
}

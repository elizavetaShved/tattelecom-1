const path = require('path')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  entry: {
    app: './src/js/app.js',
    mainPage: './src/js/pages/main-page.js'
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

const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    ['common']: './src/js/common.js',
    ['main-page']: './src/js/pages/main-page.js',
    ['mobile-communication-page']: './src/js/pages/mobile-communication-page.js',
    ['cashback-page']: './src/js/pages/cashback-page.js',
    ['roaming-page']: './src/js/pages/roaming-page.js',
    ['fly-old-number-page']: './src/js/pages/fly-old-number-page.js',
    ['beautiful-phone-page']: './src/js/pages/beautiful-phone-page.js',
    ['tv-online-page']: './src/js/pages/tv-online-page.js',
    ['4g-services-page']: './src/js/pages/4g-services-page.js',
    ['product-page']: './src/js/pages/product-page.js',
    ['rates-mobile-list-page']: './src/js/pages/rates-mobile-list-page.js',
    ['rates-internet-item-page']: './src/js/pages/rates-internet-item-page.js',
    ['rates-internet-list-page']: './src/js/pages/rates-internet-list-page.js',
    ['promo-internet-page']: './src/js/pages/promo-internet-page.js',
    ['promo-gpon-page']: './src/js/pages/promo-gpon-page.js',
    ['promo-intercom-page']: './src/js/pages/promo-intercom-page.js',
    ['promo-convergent-page']: './src/js/pages/promo-convergent-page.js',
    ['payment-services-page']: './src/js/pages/payment-services-page.js',
    ['search-site-page']: './src/js/pages/search-site-page.js',
    ['questions']: './src/js/pages/questions.js',
    ['technical-works-page']: './src/js/pages/technical-works-page.js'
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
    usedExports: true
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
};

const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    ['common']: './src/js/common.js',
    ['main-page']: './src/js/pages/main-page.js',
    ['mobile-communication-page']: './src/js/pages/mobile-communication-page.js',
    ['together-profitable-page']: './src/js/pages/together-profitable-page.js',
    ['cashback-page']: './src/js/pages/cashback-page.js',
    ['roaming-page']: './src/js/pages/roaming-page.js',
    ['fly-old-number-page']: './src/js/pages/fly-old-number-page.js',
    ['beautiful-phone-page']: './src/js/pages/beautiful-phone-page.js',
    ['tv-online-page']: './src/js/pages/tv-online-page.js',
    ['4g-services-page']: './src/js/pages/4g-services-page.js',
    ['product-page']: './src/js/pages/product-page.js',
    ['rates-mobile-list-page']: './src/js/pages/rates-mobile-list-page.js',
    ['rates-mobile-item-page']: './src/js/pages/rates-mobile-item-page.js',
    ['rates-internet-item-page']: './src/js/pages/rates-internet-item-page.js',
    ['rates-internet-list-page']: './src/js/pages/rates-internet-list-page.js',
    ['promo-internet-page']: './src/js/pages/promo-internet-page.js',
    ['promo-gpon-page']: './src/js/pages/promo-gpon-page.js',
    ['promo-intercom-page']: './src/js/pages/promo-intercom-page.js',
    ['promo-convergent-page']: './src/js/pages/promo-convergent-page.js',
    ['payment-services-page']: './src/js/pages/payment-services-page.js',
    ['search-site-page']: './src/js/pages/search-site-page.js',
    ['questions']: './src/js/pages/questions.js',
    ['technical-works-page']: './src/js/pages/technical-works-page.js',
    ['b-mobile-communication']: './src/js/pages/b-mobile-communication.js',
    ['b-rates-mobile-list']: './src/js/pages/b-rates-mobile-list.js',
    ['b-rates-mobile-internet-list']: './src/js/pages/b-rates-mobile-internet-list.js',
    ['b-main-page']: './src/js/pages/b-main-page.js',
    ['b-roaming-russia']: './src/js/pages/b-roaming-russia.js',
    ['b-roaming-international']: './src/js/pages/b-roaming-international.js',
    ['b-beautiful-phone']: './src/js/pages/b-beautiful-phone',
    ['b-single-business-page']: './src/js/pages/b-single-business-page.js',
    ['b-virtual-ats-page']: './src/js/pages/b-virtual-ats-page.js',
    ['b-connect-page']: './src/js/pages/b-connect-page.js',
    ['b-telephony-page']: './src/js/pages/b-telephony-page.js',
    ['b-communication-page']: './src/js/pages/b-communication-page.js',
    ['b-ip-telephony-page']: './src/js/pages/b-ip-telephony-page.js',
    ['b-sip-telephony-page']: './src/js/pages/b-sip-telephony-page.js',
    ['b-sip-trunk-page']: './src/js/pages/b-sip-trunk-page.js',
    ['b-digital-streams-page']: './src/js/pages/b-digital-streams-page.js',
    ['b-telephone-services-page']: './src/js/pages/b-telephone-services-page.js',
    ['b-telephone-service-item-page']: './src/js/pages/b-telephone-service-item-page',
    ['b-internet-page']: './src/js/pages/b-internet-page',
    ['b-internet-for-office-page']: './src/js/pages/b-internet-for-office-page',
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

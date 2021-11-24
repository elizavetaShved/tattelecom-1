const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    ['common']: './src/js/common.js',
    ['common-private-clients']: './src/js/common-private-clients.js',
    ['main-page']: './src/js/pages/main-page.js',
    ['mobile-communication-page']: './src/js/pages/mobile-communication-page.js',
    ['together-profitable-page']: './src/js/pages/together-profitable-page.js',
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
    ['payment-services-page']: './src/js/pages/payment-services-page.js',
    ['search-site-page']: './src/js/pages/search-site-page.js',
    ['questions']: './src/js/pages/questions.js',
    ['technical-works-page']: './src/js/pages/technical-works-page.js',
    ['sales-offices-page']: './src/js/pages/sales-offices-page.js',
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
    ['b-internet-wi-fi-page']: './src/js/pages/b-internet-wi-fi-page',
    ['b-internet-by-radio-page']: './src/js/pages/b-internet-by-radio-page',
    ['b-virtual-networks-page']: './src/js/pages/b-virtual-networks-page',
    ['b-lorawan-page']: './src/js/pages/b-lorawan-page',
    ['b-m2m-page']: './src/js/pages/b-m2m-page',
    ['b-colocation-page']: './src/js/pages/b-colocation-page',
    ['b-virtual-server-page']: './src/js/pages/b-virtual-server-page',
    ['b-web-hosting-page']: './src/js/pages/b-web-hosting-page',
    ['b-domain-registration-page']: './src/js/pages/b-domain-registration-page',
    ['b-cloud-video-page']: './src/js/pages/b-cloud-video-page',
    ['b-video-analytics-page']: './src/js/pages/b-video-analytics-page',
    ['b-m2m-business-control-page']: './src/js/pages/b-m2m-business-control-page',
    ['b-ddos-protection-page']: './src/js/pages/b-ddos-protection-page',
    ['b-video-conferencing-page']: './src/js/pages/b-video-conferencing-page',
    ['b-abb-services-page']: './src/js/pages/b-abb-services-page',
    ['b-call-center-page']: './src/js/pages/b-call-center-page',
    ['b-virtual-office-secretary-page']: './src/js/pages/b-virtual-office-secretary-page',
    ['b-smart-wifi-page']: './src/js/pages/b-smart-wifi-page',
    ['b-support-corporate-page']: './src/js/pages/b-support-corporate-page',
    ['b-support-item-page']: './src/js/pages/b-support-item-page',
    ['tattelekom-main-page']: './src/js/pages/tattelekom-main-page',
    ['tatt-investors']: './src/js/pages/tatt-investors',
    ['tatt-year-page']: './src/js/pages/tatt-year-page',
    ['tatt-quartal-report-page']: './src/js/pages/tatt-quartal-report-page',
    ['tatt-msfo-report-page']: './src/js/pages/tatt-msfo-report-page',
    ['tatt-emmision-doc-page']: './src/js/pages/tatt-emmision-doc-page',
    ['tatt-internal-doc-page']: './src/js/pages/tatt-internal-doc-page',
    ['tatt-affiliates-list-page']: './src/js/pages/tatt-affiliates-list-page',
    ['tatt-essential-facts-page']: './src/js/pages/tatt-essential-facts-page',
    ['tatt-ratings-page']: './src/js/pages/tatt-ratings-page',
    ['tatt-meetings-shareholders-page']: './src/js/pages/tatt-meetings-shareholders-page',
    ['tatt-financial-statements-page']: './src/js/pages/tatt-financial-statements-page',
    ['tatt-info-open-page']: './src/js/pages/tatt-info-open-page',
    ['tatt-suppliers-page']: './src/js/pages/tatt-suppliers-page',
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

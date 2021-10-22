const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    entry: {
        ['main-page']: './src/js/pages/main-page.js',
        ['mobile-communication-page']: './src/js/pages/mobile-communication-page.js',
        ['cashback-page']: './src/js/pages/cashback-page.js',
        ['together-profitable-page']: './src/js/pages/together-profitable-page.js',
        ['roaming-page']: './src/js/pages/roaming-page.js',
        ['ussd-requests-page']: './src/js/pages/ussd-requests-page.js',
        ['fly-old-number-page']: './src/js/pages/fly-old-number-page.js',
        ['beautiful-phone-page']: './src/js/pages/beautiful-phone-page.js',
        ['applications-page']: './src/js/pages/applications-page.js',
        ['tv-online-page']: './src/js/pages/tv-online-page.js',
        ['child-nearby-page']: './src/js/pages/child-nearby-page.js',
        ['4g-services-page']: './src/js/pages/4g-services-page.js',
        ['product-page']: './src/js/pages/product-page.js',
        ['rates-mobile-list-page']: './src/js/pages/rates-mobile-list-page.js',
        ['instructions']: './src/js/pages/instructions.js',
        ['documents']: './src/js/pages/documents.js',
        ['third-parties']: './src/js/pages/third-parties.js',
        ['rates-mobile-item-page']: './src/js/pages/rates-mobile-item-page.js',
        ['rates-internet-item-page']: './src/js/pages/rates-internet-item-page.js',
        ['rates-internet-list-page']: './src/js/pages/rates-internet-list-page.js',
        ['support-page']: './src/js/pages/support-page.js',
        ['promo-internet-page']: './src/js/pages/promo-internet-page.js',
        ['promo-gpon-page']: './src/js/pages/promo-gpon-page.js',
        ['promo-intercom-page']: './src/js/pages/promo-intercom-page.js',
        ['promo-convergent-page']: './src/js/pages/promo-convergent-page.js',
        ['error-page']: './src/js/pages/error-page.js',
        ['payment-services-page']: './src/js/pages/payment-services-page.js',
        ['search-site-page']: './src/js/pages/search-site-page-page.js',
        ['questions']: './src/js/pages/questions.js',
        ['technical-works-page']: './src/js/pages/technical-works-page.js',
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

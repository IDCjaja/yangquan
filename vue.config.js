module.exports = {
  publicPath: '/yqfw/',
  outputDir: 'yangquan',
  pluginOptions: {
    i18n: {
      locale: 'yes',
      fallbackLocale: 'yes',
      localeDir: 'yes',
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [
          './src/styles/',
        ],
        data: '@import \'injects\';',
      },
    },
  },
}

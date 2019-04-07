module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  devServer: {
    proxy: {
      '/uploads': {
        target: {
          host: 'api',
          protocol: 'http:',
          port: 1337,
        },
        changeOrigin: true
      }
    }
  }
};
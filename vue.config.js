const path = require("path");

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
    host: "0.0.0.0",
    proxy: {
      "/uploads": {
        target: {
          host: "0.0.0.0",
          protocol: "http:",
          port: 1337
        },
        changeOrigin: true
      }
    }
  }
};

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    },
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV === "production",
        plugins: [
          imageminMozjpeg({
            quality: 75,
            progressive: true
          })
        ]
      })
    ]
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

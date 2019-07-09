const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("tailwindcss")("tailwind.config.js"),
    require("postcss-nested"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["./public/**/*.html", "./src/**/*.vue"],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
      : ""
  ]
};

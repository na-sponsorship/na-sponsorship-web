module.exports = {
  plugins: [
    require("tailwindcss")("tailwind.config.js"),
    require("postcss-nested"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["./src/**/*.html", "./src/**/*.vue"],
          extractors: [
            {
              extractor: class {
                static extract(content) {
                  return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                }
              },
              extensions: ["html", "vue"]
            }
          ]
        })
      : ""
  ]
};

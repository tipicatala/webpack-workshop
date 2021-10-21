module.exports = () => ({
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"]},
      { test: /\.jp?g$/, use: ["url-loader"]}
    ]
  }
});

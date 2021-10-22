const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: "[chunkhash].js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
      { test: /\.ts$/, use: ["ts-loader"] }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ]
});
 
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production", // configures DefinePlugin by default since v4
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      REACT_APP_ORIGIN: "https://dc-img-uploader-api.onrender.com/",
    }),
  ],
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});

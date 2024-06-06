const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3000/",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      REACT_APP_ORIGIN: "http://localhost:3000/",
    }),
  ],
});

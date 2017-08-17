const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry: {
        app: "./index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["style-loader", "css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
        hash: false,
        template: "./index.html"
    })
  ]
}
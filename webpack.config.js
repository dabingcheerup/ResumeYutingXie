//import webpack npm module
const webpack = require("webpack");
const TransferWebpackPlugin = require("transfer-webpack-plugin");
const config = {
  entry: __dirname + "/src/js/index.jsx",
  output: {
    path: __dirname + "/src/dist",
    filename: "bundle.js",
    sourceMapFilename: "bundle.map.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ],
    loaders: [
      // Process any .js or .jsx file with Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ]
};
module.exports = config;

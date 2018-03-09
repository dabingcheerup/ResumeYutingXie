//import webpack npm module
const webpack = require("webpack");
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
      },
      {
        test: /\.css$/,
        use: ["style-loader, css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
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

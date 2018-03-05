const webpack = require("webpack");
const config = {
  entry: __dirname + "/src/js/index.jsx",
  output: {
    path: __dirname + "/src/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};
module.exports = config;

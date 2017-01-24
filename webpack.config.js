const webpack = require("webpack");
const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

module.exports = {
  cache: DEBUG,

  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  },

  entry: {
    js: './src/entry.js'
  },

  output: {
    filename: "./dist/main.bundle.js"
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  devtool: DEBUG ? '#source-map' : false

};

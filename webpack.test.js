/*eslint-env node */

/**
 * Webpack configuration for running tests.
 */
const path = require("path");

module.exports = {
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, exclude: 'node_modules', loader: "babel-loader" }
        ],
        preLoaders: [
            {
              test: /\.js$/,
              // exclude this dirs from coverage
              exclude: /(__TEST__|node_modules)\//,
              loader: 'isparta-instrumenter-loader'
            }
        ]
    },
    devtool: 'inline-source-map'
}

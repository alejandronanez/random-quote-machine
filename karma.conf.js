/* eslint-env node */
/* eslint global-require: "off" */

const path = require('path');

module.exports = function karmaConfig(config) {

    config.set({
        frameworks: [
            'mocha',
            'chai'
        ],

        reporters: [
            'spec',
            'coverage',
            'clear-screen'
        ],

        files: [
            './src/tests.js'
        ],


        preprocessors: {
            './src/tests.js': ['webpack']
        },

        browsers: [
            'Chrome'
        ],

        singleRun: true,

        reportSlowerThan: 100,

        autoWatchBatchDelay: 100,

        // Configure code coverage reporter
        coverageReporter: {
            check: {
                global: {
                    statements: 90,
                    branches: 80,
                    functions: 80,
                    lines: 80
                }
            },
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'coverage'
                }
            ]
        },

        // Test webpack config
        webpack: require(path.join(__dirname, 'webpack.test')),

        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: true
        }
    });
};

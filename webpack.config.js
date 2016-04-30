module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'bundle/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}

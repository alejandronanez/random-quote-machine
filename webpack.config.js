const resolve = require('path').resolve;

module.exports = env => {
	return {
		entry: './app.js',
		output: {
			filename: 'bundle.js',
			path: resolve(__dirname, 'dist'),
			pathinfo: !env.prod
		},
		context: resolve(__dirname, 'src'),
		resolve: {
			modules: [
				resolve(__dirname, 'src'),
				'node_modules'
			]
		},
		devtool: env.prod ? 'source-map' : 'eval',
		bail: env.prod,
		module: {
			loaders: [
				{ test: /\.js$/, loader: 'babel!eslint-loader', exclude: /node_modules/ },
				{ test: /\.css$/, loader: 'style!css' }
			]
		}
	};
};

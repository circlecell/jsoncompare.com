"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
 	webpack = require('webpack'),
	postcssPlugins = webpack => [
		require('postcss-import')({
            addDependencyTo: webpack
        }),
		require('postcss-url')({
			url: "inline",
			from: "frontend/pcss/style.pcss"
		}),
		require('postcss-nested')(),
		require('postcss-cssnext')(),
		require('postcss-calc')()
	];


module.exports = [{
	context: __dirname + "/frontend/js",
	entry: {
		app: './app'
	},
	output: {
		path: __dirname + '/public/dist',
		filename: "[name].js",
		library: "[name]"
	},
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'stage-0'],
				plugins: ['transform-es2015-modules-simple-commonjs']
			}
		}, {
			test: /\.css$|\.pcss$/,
			loader: ExtractTextPlugin.extract('style', 'css!postcss')
		}]
	},
	postcss: postcssPlugins,
	devtool: 'source-map',
    plugins: [
	   new ExtractTextPlugin("style.css", {
		   allChunks: true
	   })
    ]
}];

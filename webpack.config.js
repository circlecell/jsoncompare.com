"use strict";

var ExtractTextPlugin = require("extract-text-webpack-plugin"),
 	webpack = require('webpack'),
	postcssPlugins = [
		require('postcss-import'),
		require('postcss-url')({
			url: "inline",
			from: "frontend/pcss/stype.pcss"
		}),
		require('postcss-nested')(),
		require('postcss-cssnext')(),
		require('postcss-calc')(),
		require('autoprefixer')({
			browsers: ['last 3 versions']
		})
	];

module.exports = [{
	context: __dirname + "/frontend/js",
	entry: {
		app: './app'
	},
	output: {
		path: __dirname + '/public/js',
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
			loader: "style-loader!css-loader!postcss-loader"
		}]
	},
	postcss: postcssPlugins,
	devtool: 'source-map',//'eval'
	plugins: [
		new webpack.ProvidePlugin({
		    CodeMirror: "codemirror"
		})
	]
}, {
	context: __dirname + "/frontend/pcss",
	entry: {
		style: './style.pcss'
	},
	output: {
		path: __dirname + '/public/css',
		filename: "[name].css"
	},
	module: {
		loaders: [{
			test: /\.css$|\.pcss$/,
			loader: ExtractTextPlugin.extract("style", ["css", "postcss"])
		}]
	},
	postcss: postcssPlugins,
	plugins: [
	   new ExtractTextPlugin("style.css", {
		   allChunks: true
	   })
   ]
}];

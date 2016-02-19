"use strict";

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

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
				presets: ['es2015', 'stage-0']
			}
		}, {
			test: /\.css$|\.pcss$/,
			loader: "style-loader!css-loader!postcss-loader"
		}]
	},
	postcss: function() {
		return [require('autoprefixer')];
	},
	devtool: 'eval',//'source-map'
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
			loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")
		}]
	},
	postcss: function() {
		return [require('autoprefixer')];
	},
	plugins: [
	   new ExtractTextPlugin("style.css", {
		   allChunks: true
	   })
   ]
}];

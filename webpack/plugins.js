const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const { NODE_ENV } = process.env;

const plugins = [
    new webpack.ProvidePlugin({
        RealDOM: path.join(__dirname, '../packages/frontend/js/realdom')
    }),
    new ExtractTextPlugin({
        filename: 'css/style.css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: 'index.html',
        chunksSortMode: (a, b) => {
            const order = ['manifest', 'vendor', 'app'];
            const nameA = a.names[0];
            const nameB = b.names[0];

            return order.indexOf(nameA) - order.indexOf(nameB);
        }
    }),
    new CopyWebpackPlugin([{ from: 'icons', to: 'icons' }]),
    new SplitByPathPlugin([{
        name: 'vendor',
        path: path.join(__dirname, '..', 'packages/frontend/node_modules/')
    }], {
        // fix https://github.com/webpack/extract-text-webpack-plugin/issues/92
        ignore: [/\.css/]
    })
];

if (NODE_ENV === 'production') {
    plugins.push(
        new UglifyJSPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

if (NODE_ENV === 'development') {
    plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = plugins;

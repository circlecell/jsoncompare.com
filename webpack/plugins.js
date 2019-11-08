const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    new CopyWebpackPlugin([{ from: 'static' }])
];

if (NODE_ENV === 'development') {
    plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = plugins;

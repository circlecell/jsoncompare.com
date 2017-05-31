const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const entry = require('./entry');
const output = require('./output');
const plugins = require('./plugins');


const { NODE_ENV } = process.env;
const root = path.resolve(__dirname, '..');

if (!NODE_ENV) {
    throw Error('NODE_ENV is not set');
}

module.exports = {
    entry,
    plugins,
    output,
    devtool: 'module-source-map',
    context: `${root}/packages/frontend`,
    module: {
        rules: [{
            test: /.js?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            }),
            include: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }, 'postcss-loader']
            }),
            exclude: /node_modules/
        }]
    }
};

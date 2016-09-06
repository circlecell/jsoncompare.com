import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import entry from './entry';
import output from './output';
import plugins from './plugins';
import postcss from './postcss';

const { NODE_ENV } = process.env;
const root = path.resolve(__dirname, '..');

if (!NODE_ENV) {
    throw Error('NODE_ENV is not set');
}

const cssConfig = JSON.stringify({
    modules: true,
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
});

module.exports = {
    entry,
    plugins,
    postcss,
    output,
    devtool: 'module-source-map',
    context: `${root}/frontend`,
    module: {
        loaders: [{
            test: /.js?$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss'),
            include: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', `css?${cssConfig}!postcss`),
            exclude: /node_modules/
        }]
    }
};

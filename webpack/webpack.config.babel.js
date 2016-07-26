import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import entry from './entry';
import plugins from './plugins';
import postcss from './postcss';

const { NODE_ENV, PORT } = process.env;
const root = path.resolve(__dirname, '..');

module.exports = {
    entry,
    plugins,
    postcss,
    devtool: 'module-source-map',
    context: `${root}/frontend`,
    output: {
        path: `${root}/public`,
        filename: 'js/app.js',
        library: 'app',
        publicPath: '/',
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loaders: ['babel'/*, 'eslint'*/],
            exclude: /node_modules/
        }, {
            test: /\.css$|\.pcss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss')
        }]
    }
};

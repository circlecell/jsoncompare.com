import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import entry from './entry';
import plugins from './plugins';
import postcss from './postcss';

const { NODE_ENV } = process.env;
const root = path.resolve(__dirname, '..');

let filename;
let chunkFilename;

if (!NODE_ENV) {
    throw Error('NODE_ENV is not set');
}

if (NODE_ENV === 'development') {
    filename = 'js/[name].js';
    chunkFilename = 'static/js/[id].[name].chunk.js';
} else {
    filename = 'js/[name]-[hash].js';
    chunkFilename = 'js/[id]-[chunkhash].[name].chunk.js';
}

module.exports = {
    entry,
    plugins,
    postcss,
    devtool: 'module-source-map',
    context: `${root}/frontend`,
    output: {
        filename,
        chunkFilename,
        path: `${root}/public`,
        publicPath: '/',
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loaders: ['babel', 'eslint'],
            exclude: /node_modules/
        }, {
            test: /\.css$|\.pcss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss')
        }]
    }
};

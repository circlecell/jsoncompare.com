import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssNested from 'postcss-nested';
import postcssCssnext from 'postcss-cssnext';
import postcssCalc from 'postcss-calc';
import path from 'path';
import webpack from 'webpack';

const postcssPlugins = webpack => [
    postcssImport({ addDependencyTo: webpack }),
    postcssUrl({
        url: 'inline',
        from: 'frontend/pcss/style.pcss'
    }),
    postcssNested(),
    postcssCssnext(),
    postcssCalc()
];


const entry = [ './js/app' ];
const plugins = [
    new ExtractTextPlugin('css/style.css', {
        allChunks: true
    }),
    new CopyWebpackPlugin([
        { from: 'index.html', to: 'index.html' },
    ])
];

if(process.env.NODE_ENV === 'development') {
    entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');

    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    )
}

module.exports = {
    context: path.resolve(__dirname, '..', 'frontend'),
    entry,
    plugins,
    output: {
        path: path.resolve(__dirname, '..', 'public'),
        filename: 'js/app.js',
        library: 'app',
        publicPath: '/'
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
    },
    postcss: postcssPlugins,
    devtool: 'module-source-map'

};

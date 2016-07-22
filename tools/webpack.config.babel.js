import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssNested from 'postcss-nested';
import postcssCssnext from 'postcss-cssnext';
import postcssCalc from 'postcss-calc';
import path from 'path';

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


module.exports = {
    context: path.resolve(__dirname, '..', 'frontend'),
    entry: {
        app: './js/app'
    },
    output: {
        path: path.resolve(__dirname, '..', 'public'),
        filename: 'js/[name].js',
        library: '[name]'
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
    },
    postcss: postcssPlugins,
    devtool: 'module-source-map',
    plugins: [
        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        }),
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'index.html' },
        ])
    ]
};

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SplitByPathPlugin from 'webpack-split-by-path';
import path from 'path';

const { NODE_ENV } = process.env;

const plugins = [
    new ExtractTextPlugin('css/style.css', {
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
    new SplitByPathPlugin([{
        name: 'vendor',
        path: path.join(__dirname, '..', 'frontend/node_modules/'),
    }], {
        // fix https://github.com/webpack/extract-text-webpack-plugin/issues/92
        ignore: [/\.css/]
    }),
];

if (NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

if (NODE_ENV === 'development') {
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

export default plugins;

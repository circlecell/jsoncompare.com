import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const { NODE_ENV, PORT } = process.env;

const plugins = [
    new ExtractTextPlugin('css/style.css', {
        allChunks: true
    }),
    new CopyWebpackPlugin([
        { from: 'index.html', to: 'index.html' },
    ])
];

if(NODE_ENV === 'development') {
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    )
}

export default plugins;

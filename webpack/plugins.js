import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { NODE_ENV, PORT } = process.env;

const plugins = [
    new ExtractTextPlugin('css/style.css', {
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
];

if(NODE_ENV === 'development') {
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    )
}

export default plugins;

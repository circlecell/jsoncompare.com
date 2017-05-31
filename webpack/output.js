const path = require('path');

const { NODE_ENV } = process.env;
let filename;
let chunkFilename;

if (NODE_ENV === 'development') {
    filename = 'js/[name].js';
    chunkFilename = 'static/js/[id].[name].chunk.js';
} else {
    filename = 'js/[name]-[hash].js';
    chunkFilename = 'js/[id]-[chunkhash].[name].chunk.js';
}

const output = {
    filename,
    chunkFilename,
    path: path.resolve(__dirname, '../packages/backend/public'),
    publicPath: '/'
};

if (NODE_ENV === 'development') {
    Object.assign(output, {
        libraryTarget: 'var',
        library: '[name]'
    });
}

module.exports = output;

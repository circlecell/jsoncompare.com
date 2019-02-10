const { NODE_ENV } = process.env;

const entry = {
    app: [
        '@babel/polyfill',
        './js/index'
    ]
};

if (NODE_ENV === 'development') {
    entry.app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = entry;

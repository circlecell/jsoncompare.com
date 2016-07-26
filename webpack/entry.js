const { NODE_ENV } = process.env;

const entry = [
    'babel-polyfill',
    './js/index'
];

if(NODE_ENV === 'development') {
    entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

export default entry;

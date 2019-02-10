module.exports = {
    presets: [
        ['@babel/preset-react', { pragma: 'RealDOM.createElement' }],
        '@babel/preset-env'
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
};

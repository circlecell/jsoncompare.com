const path = require('path');
const entry = require('./entry');
const output = require('./output');
const plugins = require('./plugins');
const moduleConf = require('./module');


const { NODE_ENV } = process.env;
const root = path.resolve(__dirname, '..');

if (!NODE_ENV) {
    throw Error('NODE_ENV is not set');
}

module.exports = {
    devtool: 'module-source-map',
    context: `${root}/packages/frontend`,
    optimization: { minimize: true },
    module: moduleConf,
    entry,
    plugins,
    output
};
